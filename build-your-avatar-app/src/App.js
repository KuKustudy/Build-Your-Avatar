import "./styles.scss";
import {Canvas, Rect, Circle, FabricObject, loadSVGFromString} from 'fabric';

import React, {useState, useRef, useEffect} from 'react';
import * as fabric from 'fabric';


import {Button} from 'blocksin-system';
import IconButton from "blocksin-system/dist/IconButton";
import {SquareIcon, CircleIcon, DownloadIcon} from "sebikostudio-icons";


function svgStringToFabricPaths(svgString) {
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
  const pathElements = svgDoc.querySelectorAll("path");

  if (!pathElements.length) {
    console.error("No <path> elements found in the SVG string.");
    return [];
  }

  const paths = [];

  pathElements.forEach((pathElement) => {
    const pathData = pathElement.getAttribute("d");
    if (!pathData) return;

    const fillColor = pathElement.style.fill || pathElement.getAttribute("fill") || "#000";
    const opacity =
      parseFloat(pathElement.style.fillOpacity) ||
      parseFloat(pathElement.getAttribute("fill-opacity")) ||
      1;

    const fabricPath = new fabric.Path(pathData, {
      fill: fillColor,
      opacity: opacity,
    });

    paths.push(fabricPath);
  });

  return paths;
}


function App() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

 

  // initialise the canva
  useEffect(() => {
    // create a new canva object
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: 500,
        height: 500,
      });

      initCanvas.backgroundColor = "#fff";
      initCanvas.renderAll();

      setCanvas(initCanvas);

      return () => {
        initCanvas.dispose(); // free the canva object after user left the page
      };
    }
  },[])

  // add a blue hat
  const addBlueHat = () => {
    if (canvas) {
      // add customised object
      let bluehat_svg = `<svg
   width="512"
   height="512"
   viewBox="0 0 512 512"
   version="1.1"
   id="svg1"
   xml:space="preserve"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><defs
     id="defs1" /><g
     id="layer1"><path
       style="fill:#0c3aea;fill-opacity:1"
       d="m 80.273492,224.17108 0.810844,30.0012 h 32.433744 l 0.81084,17.83856 189.73735,-1.62169 0.81084,-32.43373 h 128.11325 l 0.81085,-47.02892 h -17.83856 l -0.81084,-30.0012 h -15.40602 l -0.81085,-19.46024 h -15.40602 l 0.81084,-16.21687 h -16.21687 v -14.59518 h -14.59518 l -0.81084,-15.406029 h -31.62289 l -2.43253,-17.838549 h -63.24578 l 0.81084,17.027709 -33.24458,0.81084 0.81085,15.406029 -31.62289,0.81084 3.24337,17.83856 -35.67711,-0.81085 1.62169,31.62289 -18.6494,-0.81084 0.81084,17.02771 -18.64939,-0.81084 0.81084,16.21687 -30.81206,0.81084 0.81085,30.81205 z"
       id="path1" /><path
       style="fill:#5cbfe3;fill-opacity:1;stroke-width:1.03839"
       d="m 93.246986,189.76312 2.43253,33.22342 33.244574,0.87431 -0.81084,16.61171 h 15.40602 l 1.62169,14.8631 14.59518,3.49721 v 13.11452 l 144.33012,0.87429 2.43253,-48.96083 -50.27229,0.87429 v -20.10891 l -48.6506,-0.87429 -0.81084,-14.86313 -63.24579,-0.87428 -2.43253,-15.73742 h -17.02771 v 17.48601 z"
       id="path2" /><path
       style="fill:#3b788e;fill-opacity:1;stroke-width:1.03495"
       d="m 79.846837,220.54939 48.806273,0.85131 v 15.32363 l 16.40995,0.68349 0.87741,16.55415 15.50081,1.50492 v 15.95218 l -48.25725,0.30099 -0.58493,-17.75809 -33.048909,-1.20394 z"
       id="path3" /><path
       style="fill:#18296b;fill-opacity:1"
       d="m 416.16535,190.14277 0.40543,47.63705 h 16.62228 l 0.20272,-47.63705 z"
       id="path4" /></g></svg>`

      const pathobj_array = svgStringToFabricPaths(bluehat_svg);
      console.log(pathobj_array);
      if (pathobj_array) {
        const group = fabric.util.groupSVGElements(pathobj_array);
        canvas.add(group);
      }

    }
  }
  // create new rectangle
  const addRectangle = () => {
    // if canvas exist, then able to create new rectangle
    if (canvas) {
      const rect = new Rect({
        top: 100,
        left: 50,
        width: 100,
        height: 60,
        fill: "#D84D42",
      });

      canvas.add(rect);

    } 
  }

  // create new circle
  const addCircle = () => {
    // if canvas exist, then able to create new circle
    if (canvas) {
      const circle = new Circle({
        top: 150,
        left: 150,
        radius: 50,
        fill: "#2F4DC6",
      });

      canvas.add(circle);

    } 
  }

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

  return (
    <div className="App">
      
      <div className="Toolbar darkmode">
        <IconButton onClick={addRectangle} variant="ghost" size="medium">
          <SquareIcon/>
        </IconButton>

        <IconButton onClick={addCircle} variant="ghost" size="medium">
          <CircleIcon/>
        </IconButton>

        <IconButton onClick={addBlueHat} variant="ghost" size="medium">
          🧢
        </IconButton>
      </div>

      <canvas id="canvas"ref={canvasRef} />

      <div className="Downloadbar darkmode">
        <IconButton onClick={handleExport} variant="ghost" size="medium">
          <DownloadIcon/>
        </IconButton>
      </div>
      

    </div>

  );
}

export default App;
