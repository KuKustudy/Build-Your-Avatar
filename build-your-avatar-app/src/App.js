import "./styles.scss";
import {Canvas, Rect, Circle} from 'fabric';
import React, {useState, useRef, useEffect} from 'react';
import {Button} from 'blocksin-system';
import IconButton from "blocksin-system/dist/IconButton";
import {SquareIcon, CircleIcon} from "sebikostudio-icons";

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

  return (
    <div className="App">
      
      <div className="Toolbar darkmode">
        <IconButton onClick={addRectangle} variant="ghost" size="medium">
          <SquareIcon/>
        </IconButton>

        <IconButton onClick={addCircle} variant="ghost" size="medium">
          <CircleIcon/>
        </IconButton>
      </div>

      <canvas id="canvas"ref={canvasRef} />
    </div>
  );
}

export default App;
