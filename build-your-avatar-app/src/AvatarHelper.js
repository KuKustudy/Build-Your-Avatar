/*
   This file contains functions that add objects to the canva,
   and these functions will be imported in App.js
*/

import { Rect, Circle} from 'fabric';
import * as fabric from 'fabric';
import { IconButton } from 'blocksin-system';
import { SquareIcon, CircleIcon } from 'sebikostudio-icons';
import { LuCat, LuBone, LuSmile } from 'react-icons/lu';
import { FaRegFaceFlushed } from "react-icons/fa6";
import { FaHatCowboy} from "react-icons/fa";





var svgStringDict = {
    "bluehat": `<svg
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
            id="path4" /></g></svg>`,
    "yellowhat":`<svg
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
       style="fill:#f28824;fill-opacity:1"
       d="m 80.273492,224.17108 0.810844,30.0012 h 32.433744 l 0.81084,17.83856 189.73735,-1.62169 0.81084,-32.43373 h 128.11325 l 0.81085,-47.02892 h -17.83856 l -0.81084,-30.0012 h -15.40602 l -0.81085,-19.46024 h -15.40602 l 0.81084,-16.21687 h -16.21687 v -14.59518 h -14.59518 l -0.81084,-15.406029 h -31.62289 l -2.43253,-17.838549 h -63.24578 l 0.81084,17.027709 -33.24458,0.81084 0.81085,15.406029 -31.62289,0.81084 3.24337,17.83856 -35.67711,-0.81085 1.62169,31.62289 -18.6494,-0.81084 0.81084,17.02771 -18.64939,-0.81084 0.81084,16.21687 -30.81206,0.81084 0.81085,30.81205 z"
       id="path1" /><path
       style="fill:#d4f224;fill-opacity:1;stroke-width:1.03839"
       d="m 93.246986,189.76312 2.43253,33.22342 33.244574,0.87431 -0.81084,16.61171 h 15.40602 l 1.62169,14.8631 14.59518,3.49721 v 13.11452 l 144.33012,0.87429 2.43253,-48.96083 -50.27229,0.87429 v -20.10891 l -48.6506,-0.87429 -0.81084,-14.86313 -63.24579,-0.87428 -2.43253,-15.73742 h -17.02771 v 17.48601 z"
       id="path2" /><path
       style="fill:#8eb60b;fill-opacity:1;stroke-width:1.03495"
       d="m 79.846837,220.54939 48.806273,0.85131 v 15.32363 l 16.40995,0.68349 0.87741,16.55415 15.50081,1.50492 v 15.95218 l -48.25725,0.30099 -0.58493,-17.75809 -33.048909,-1.20394 z"
       id="path3" /><path
       style="fill:#b65e0b;fill-opacity:1"
       d="m 416.16535,190.14277 0.40543,47.63705 h 16.62228 l 0.20272,-47.63705 z"
       id="path4" /></g></svg>`,
    "squareface": `<svg
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
       style="fill:#3e3b3b;fill-opacity:1"
       d="m 124.86988,238.38795 -15.40602,-0.81084 1.62168,192.98072 288.66024,0.81085 -1.62168,-192.98073 h -15.40603 l 0.81085,176.76386 -257.03735,1.62169 z"
       id="path1" /></g></svg>`,
    "freezeface": `<svg
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
       style="fill:#3e3b3b;fill-opacity:1"
       d="m 120.81567,287.8494 0.81084,32.43374 h 33.24458 v -17.02771 l -17.83856,0.81084 0.81085,-15.40602 z"
       id="path1" /><path
       style="fill:#3e3b3b;fill-opacity:1"
       d="m 232.84217,287.13494 0.81084,32.43374 h 33.24458 v -17.02771 l -17.83856,0.81084 0.81085,-15.40602 z"
       id="path1-3" /><path
       style="fill:#e3b1d4;fill-opacity:1"
       d="m 90.003615,337.31085 0.810843,30.0012 31.622892,0.81085 -0.81084,-32.43374 z"
       id="path2" /><path
       style="fill:#e3b1d4;fill-opacity:1"
       d="m 267.49277,337.48675 0.81084,30.0012 31.6229,0.81085 -0.81085,-32.43374 z"
       id="path2-2" /><path
       style="fill:#3e3b3b;fill-opacity:1"
       d="m 154.80527,352.03864 79.69605,0.86003 0.57335,47.30161 -81.12943,0.57336 z"
       id="path3" /><path
       style="fill:#ea1c1c;fill-opacity:1"
       d="m 170.85914,369.52591 0.28668,16.05388 47.87496,-0.28668 -0.57335,-15.7672 z"
       id="path4" /></g></svg>`
}
// a function that convert SVG string to fabric paths
// this is essentiall to add the customised object like blue hat
export function svgStringToFabricPaths(svgString) {
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



export async function loadSVGstring(customisedShapeName) {
  try {
    const response = await fetch('/svg_files/'+customisedShapeName+'.svg');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const svgString = await response.text();
    return svgString;
  } catch (error) {
    console.error("Failed to load bluehat SVG:", error);
    return null;
  }
}

// a function that add a blue hat to the canva
export function addBlueHat(canvas) {
  if (canvas) {
    let bluehat_svg = svgStringDict['bluehat'];

    //   let bluehat_svg = `<svg
    //     width="512"
    //     height="512"
    //     viewBox="0 0 512 512"
    //     version="1.1"
    //     id="svg1"
    //     xml:space="preserve"
    //     xmlns="http://www.w3.org/2000/svg"
    //     xmlns:svg="http://www.w3.org/2000/svg"><defs
    //         id="defs1" /><g
    //         id="layer1"><path
    //         style="fill:#0c3aea;fill-opacity:1"
    //         d="m 80.273492,224.17108 0.810844,30.0012 h 32.433744 l 0.81084,17.83856 189.73735,-1.62169 0.81084,-32.43373 h 128.11325 l 0.81085,-47.02892 h -17.83856 l -0.81084,-30.0012 h -15.40602 l -0.81085,-19.46024 h -15.40602 l 0.81084,-16.21687 h -16.21687 v -14.59518 h -14.59518 l -0.81084,-15.406029 h -31.62289 l -2.43253,-17.838549 h -63.24578 l 0.81084,17.027709 -33.24458,0.81084 0.81085,15.406029 -31.62289,0.81084 3.24337,17.83856 -35.67711,-0.81085 1.62169,31.62289 -18.6494,-0.81084 0.81084,17.02771 -18.64939,-0.81084 0.81084,16.21687 -30.81206,0.81084 0.81085,30.81205 z"
    //         id="path1" /><path
    //         style="fill:#5cbfe3;fill-opacity:1;stroke-width:1.03839"
    //         d="m 93.246986,189.76312 2.43253,33.22342 33.244574,0.87431 -0.81084,16.61171 h 15.40602 l 1.62169,14.8631 14.59518,3.49721 v 13.11452 l 144.33012,0.87429 2.43253,-48.96083 -50.27229,0.87429 v -20.10891 l -48.6506,-0.87429 -0.81084,-14.86313 -63.24579,-0.87428 -2.43253,-15.73742 h -17.02771 v 17.48601 z"
    //         id="path2" /><path
    //         style="fill:#3b788e;fill-opacity:1;stroke-width:1.03495"
    //         d="m 79.846837,220.54939 48.806273,0.85131 v 15.32363 l 16.40995,0.68349 0.87741,16.55415 15.50081,1.50492 v 15.95218 l -48.25725,0.30099 -0.58493,-17.75809 -33.048909,-1.20394 z"
    //         id="path3" /><path
    //         style="fill:#18296b;fill-opacity:1"
    //         d="m 416.16535,190.14277 0.40543,47.63705 h 16.62228 l 0.20272,-47.63705 z"
    //         id="path4" /></g></svg>`

    const pathobj_array = svgStringToFabricPaths(bluehat_svg);
    if (pathobj_array) {
      const group = fabric.util.groupSVGElements(pathobj_array);
      canvas.add(group);
    }
  }
}

// a function that add a blue hat to the canva
export function addCustomisedShape(canvas, customisedShapeName) {
  if (canvas) {
    let customised_shape_svg = svgStringDict[customisedShapeName];

    const pathobj_array = svgStringToFabricPaths(customised_shape_svg);
    if (pathobj_array) {
      const group = fabric.util.groupSVGElements(pathobj_array);
      canvas.add(group);
    }
  }
}

// a function that add a rectangle to the canva
export function addRectangle(canvas) {
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

// a function that add a circle to the canva
export function addCircle(canvas) {
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

// export Menus as a function to pass out the list of menu items
export function getMenus(canvas) {
  return [
    { 
      title: "face",
      icon: <LuCat />,
      submenu: true,
      submenuItems: [
        {
          title: "Circle",
          effect: () => addCircle(canvas),
          icon: <CircleIcon />,
        },
        {
          title: "Rectangle",
          effect: () => addRectangle(canvas),
          icon: <SquareIcon />,
        },
        {
          title: "Square face",
          effect: () => addCustomisedShape(canvas, "squareface"),
          icon: <SquareIcon />,
        },
      ],
    },
    {
      title: "facial expression",
      icon: <LuSmile />,
      submenu: true,
      submenuItems: [
        {
          title: "Flushed",
          effect: () => addCustomisedShape(canvas, "freezeface"),
          icon: <FaRegFaceFlushed color="#DC143C"/>,
        },
        {
          title: "facial 2",
          effect: () => addCircle(canvas),
          icon: <CircleIcon />,
        },
      ],
    },
    {
      title: "decoration",
      icon: <LuBone />,
      submenu: true,
      submenuItems: [
        {
          title: "blue hat",
          effect: () => addCustomisedShape(canvas, "bluehat"),
          icon: <FaHatCowboy color="#1E90FF"/>,
        },
        {
          title: "yellow hat",
          effect: () => addCustomisedShape(canvas, "yellowhat"),
          icon: <FaHatCowboy color="#FFBF00"/>,
        },
      ],
    },
  ];
}
