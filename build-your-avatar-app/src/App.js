import {Canvas} from 'fabric';
import {useState, useRef, useEffect, useCallback} from 'react';
import React from 'react';
import IconButton from "blocksin-system/dist/IconButton";
import {DownloadIcon, ArrowLeftIcon, HeartIcon, DoubleArrowDownIcon} from "sebikostudio-icons";
import {getMenus} from "./AvatarHelper";
import './tailwindoutput.css';



function App() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  // get menus so effect handlers have access
  const Menus = canvas ? getMenus(canvas) : []; 
 

  // initialise the canva
  useEffect(() => {
    // create a new canva object
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: 500,
        height: 500,
        preserveObjectStacking: true,
      });

      initCanvas.backgroundColor = "#fff";
      initCanvas.renderAll();

      setCanvas(initCanvas);

      return () => {
        initCanvas.dispose(); // free the canva object after user left the page
      };

    }
  },[])


  // handle exportation, export canva as png
  const handleExport = () => {
    if (canvas) {
      // set color of background to be white
      canvas.backgroundColor = "white";
      // export the canvas
      const link = document.createElement("a");
      link.href = canvas.toDataURL({
        format: "png",
        quality: 0.8,
      });
      let file_name = "your-avatar-image";
      link.download = `canvas_export_${file_name}.png`;
      link.click();
    }
  };


  // handle deletion of object
  const handleDelete = useCallback(() => {
    if (canvas) {
      const activeObject = canvas.getActiveObject();
      if (activeObject) {
        canvas.remove(activeObject);
        canvas.discardActiveObject();
        canvas.requestRenderAll();
      }
    }
  }, [canvas]);

  // monitor to detect whether user has pressed delete button when selecting an object
  useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'Delete' || e.key === 'Backspace') {
      handleDelete();
    }
  };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleDelete]);



  return (
    /* the app container */
    <div class="font-sans justify-center bg-stone-200/75 min-h-screen h-full">
      
     {/* the menubar + title + canva wrapper + buttons */}
      <div class="flex w-full">

        {/* the side menu*/}
        <div class="flex">
          
          <div class={`bg-yellow-50 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>

            {/* the side menu open/close button */}
            <ArrowLeftIcon class={`bg-yellow-50 text-yellow-900 rounded-full h-10 w-10 absolute -right-3 
            top-9 cursor-pointer ${!open && "rotate-180"}`} 
            onClick={() => setOpen(!open)}/>

            {/* the side menu title */}
            <h3 class={`text-3xl pt-3 mb-6 ${!open && "hidden"}`}>Hi, Artist!</h3>

            {/* list of menu items: face, facial expression, decorations*/}
            <ul class="pt-4">
            {Menus.map((menu, index) => (
              <React.Fragment key={`menu-fragment-${index}`}>
                {/* display menu items' icon, and text and open/close button*/}
                <li key={index} class="bg-green-200 opacity-75 text-stone-800 text-sm flex items-center gap-x-4 
                cursor-pointer p-2 hover:bg-green-500 
                rounded-md mt-6">
                  <span class={`text-2xl block float-left`}> {menu.icon ? menu.icon : <HeartIcon/>} </span>
                  <span class={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
                  {menu.submenu && open &&(
                    <DoubleArrowDownIcon class={`${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen)}/>
                  )}

                </li>
                
                {/* display menu items' submenu items' text*/}
                {menu.submenu && submenuOpen && open &&(
                  <ul>
                    {menu.submenuItems.map((submenuItem, subIndex) => (
                      <li 
                        key={`submenu-${submenuItem.title}-${subIndex}`}
                        onClick={submenuItem.effect}
                        class="bg-green-100 opacity-75 text-stone-800 text-sm flex items-center gap-x-4 
                              cursor-pointer px-5 p-2 hover:bg-green-300 rounded-md mt-2"> 
                            
                        {submenuItem.icon}
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
                
              </React.Fragment>
            ))}
          </ul>

          </div>

        </div>
      
        {/* the title + canva + buttons */}
        <div class= "flex-1 flex flex-col items-center justify-start w-full">
          <h1 class= "text-2xl font-bold text-stone-600/75 mb-16 mt-16">✨ Set Your Avatar ✨</h1>


          {/* the canva */}
          <canvas id="canvas"ref={canvasRef} />

          {/* the download button */}
          <div >
            <IconButton onClick={handleExport} variant="ghost" size="medium">
              <DownloadIcon/>
            </IconButton>
          </div>

        </div>

      
      </div>
  </div>

  );
}

export default App;
