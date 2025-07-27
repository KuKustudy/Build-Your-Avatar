/*
   This file contains functions that add objects to the canva,
   and these functions will be imported in App.js
*/

import * as fabric from 'fabric';

// just bunch of icons
import { LuCat, LuBone, LuSmile } from 'react-icons/lu';
import { FaRegFaceFlushed, FaRegSquare, FaAppleWhole, FaRegHeart } from "react-icons/fa6";
import { FaHatCowboy, FaRegSmileWink} from "react-icons/fa";
import { RiBearSmileLine } from "react-icons/ri";
import { BiCake } from "react-icons/bi";
import { GiPartyHat } from "react-icons/gi";


// this dict contains svg strings of customised object
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
    "bearface": `<svg
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
       style="fill:#946956;fill-opacity:1;opacity:1"
       d="m 57.630399,119.65088 16.62723,0.57335 V 88.689819 H 139.0465 l -0.57336,16.053881 32.10776,0.57336 v 18.34729 l 14.33382,-1.72006 1.72006,16.05388 16.05388,-0.57335 v 15.48052 l 95.17657,-0.57335 1.14671,-30.96105 30.96105,0.57335 -1.1467,-16.62723 h 17.77394 l 1.1467,-17.200591 59.05535,0.57335 V 104.7437 l 20.6407,0.57336 v 32.10776 l 16.05388,0.57335 -1.14671,32.68111 17.20059,-0.57335 -1.14671,77.97599 16.05388,1.72005 v 32.68112 l -15.48052,-0.57336 -0.57336,48.16164 -32.68111,0.57336 -0.57335,14.90717 -13.18712,1.14671 v 32.10776 l -17.77394,-1.72006 v 14.33382 l -32.68111,-0.57336 1.14671,18.92065 H 122.41926 l 1.14671,-16.62723 h -16.62722 l -1.14671,-15.48053 -15.480521,-0.57335 v -15.48053 l -32.68112,0.57335 1.14671,-34.40117 -16.05388,-0.57335 -0.57336,-45.29488 -16.62723,-1.1467 v -46.44158 l 17.20059,1.1467 v -67.08228 l 16.05388,0.57335 z"
       id="path1" /><path
       style="fill:#d9bdb0;fill-opacity:1"
       d="m 74.433735,155.23038 0.573352,18.34729 66.508933,-1.14671 v -49.30834 l -51.601758,1.72005 0.573352,31.53441 z"
       id="path2-9" /><path
       style="fill:#d9bdb0;fill-opacity:1"
       d="m 346.77633,139.1765 1.14671,32.10775 64.21552,-0.57335 -1.14671,-48.16164 -48.16164,-0.57335 0.57335,17.77394 z"
       id="path3" /><path
       style="fill:#d9bdb0;fill-opacity:1"
       d="m 202.71084,250.5506 113.51808,0.81085 v 15.0006 l 14.59518,-0.40542 0.81084,17.43313 h 16.21687 l -0.40542,47.83976 -16.21687,0.40542 0.40542,15.81145 h -16.21687 v 15.81144 l -112.70723,0.40542 v -16.21686 l -14.59518,0.81084 -0.81084,-17.02771 -15.40602,-0.40542 v -49.46145 l 15.0006,0.40542 v -14.59518 l 16.62229,-0.40542 z"
       id="path2" /></g></svg>`,
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
       id="path4" /></g></svg>`,
    "bearsmile": `<svg
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
       style="fill:#000000;fill-opacity:1"
       d="m 210.00843,224.60362 0.81085,16.21686 h 16.21687 l -0.81085,-16.21686 z"
       id="path3" /><path
       style="fill:#000000;fill-opacity:1"
       d="m 290.28193,224.60362 1.62169,15.40602 14.59518,0.81084 v -16.21686 z"
       id="path4" /><path
       style="fill:#000000;fill-opacity:1"
       d="m 226.2253,257.03735 1.62169,16.21687 15.40602,0.81084 0.81085,14.59518 60.81325,-0.81084 0.81084,-30.00121 z"
       id="path5" /><path
       style="fill:#000000;fill-opacity:1"
       d="m 209.19759,304.87711 2.43253,31.62289 47.83976,1.62169 -1.62169,-19.46024 H 226.2253 l 0.81085,-14.59518 z"
       id="path6" /><path
       style="fill:#eaa2a2;fill-opacity:1"
       d="m 114.32892,289.47109 0.81084,31.62289 33.24458,-1.62169 -1.62169,-30.0012 z"
       id="path7" /><path
       style="fill:#eaa2a2;fill-opacity:1"
       d="m 389.55181,290.05422 0.81084,31.62289 33.24458,-1.62169 -1.62169,-30.0012 z"
       id="path7-0" /></g></svg>`,
    "cake": `<svg
   version="1.1"
   id="svg1"
   width="512"
   height="512"
   viewBox="0 0 512 512"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1" />
  <g
     id="g1">
    <path
       style="fill:#e1acac;fill-opacity:1"
       d="m 207.57474,79.223621 0.44259,80.108799 96.04204,0.44259 -0.44259,-80.108799 z"
       id="path1" />
    <path
       style="fill:#f0c9b4;fill-opacity:1;stroke-width:1.01146"
       d="m 206.68956,79.223621 1.35836,33.194259 47.54275,-0.44259 0.45278,15.49065 h 33.50631 l 0.45279,-15.04806 14.942,-0.44259 V 79.223621 Z"
       id="path2" />
    <path
       style="fill:#c70303;fill-opacity:1"
       d="m 239.88381,46.914547 0.88518,48.684907 32.30908,0.44259 -1.32777,-32.751665 -16.37583,0.44259 -0.44259,-15.933242 z"
       id="path3" />
    <path
       style="fill:#8b3434;fill-opacity:1"
       d="m 238.99863,47.357137 1.32777,16.375832 h 15.49066 V 47.357137 Z"
       id="path4" />
  </g>
            </svg>`,
    "birthdayhat": `<svg
   version="1.1"
   id="svg1"
   width="512"
   height="512"
   viewBox="0 0 512 512"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1" />
  <g
     id="g1">
    <path
       style="fill:#8cd0e8;fill-opacity:1"
       d="m 206.68956,94.714274 0.44259,64.175556 96.48463,1.32777 V 95.156864 l -16.37583,0.44259 -0.44259,-48.242317 -15.93324,0.44259 0.88518,-30.981305 -32.30908,0.44259 0.44259,30.538715 h -16.81842 l 0.88518,49.127497 z"
       id="path1" />
    <path
       style="fill:#eaa2a2;fill-opacity:1"
       d="m 223.50798,63.732969 h 15.49065 l 0.88518,15.490652 -16.37583,0.44259 z"
       id="path2" />
    <path
       style="fill:#eaa2a2;fill-opacity:1"
       d="m 255.37447,62.405199 1.32777,17.703603 h 14.60547 V 63.732969 Z"
       id="path3" />
    <path
       style="fill:#eaa2a2;fill-opacity:1"
       d="m 207.13215,95.156864 16.81842,2.21295 -0.88518,14.162886 -15.93324,0.88518 z"
       id="path4" />
    <path
       style="fill:#eaa2a2;fill-opacity:1"
       d="m 241.21158,111.97529 -0.88518,15.04806 h 15.04807 V 111.5327 Z"
       id="path5" />
    <path
       style="fill:#eaa2a2;fill-opacity:1"
       d="m 271.7503,96.042044 0.44259,16.375836 12.83511,-1.32777 1.32777,-14.162886 z"
       id="path6" />
    <path
       style="fill:#eaa2a2;fill-opacity:1"
       d="m 287.24095,128.79371 1.77036,15.04806 h 15.04806 l -0.88518,-15.93324 z"
       id="path7" />
    <path
       style="fill:#eaa2a2;fill-opacity:1"
       d="m 238.55604,144.28436 1.32777,14.60547 h 15.93325 v -14.60547 z"
       id="path8" />
    <path
       style="fill:#e1666c;fill-opacity:1;stroke-width:1.14781"
       d="m 239.88381,14.713129 v 19.808896 l 31.4239,-1.65074 V 14.162882 Z"
       id="path9" />
  </g>
                  </svg>`,
    "apple": `<svg
   version="1.1"
   id="svg1"
   width="512"
   height="512"
   viewBox="0 0 512 512"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1" />
  <g
     id="g1">
    <path
       style="fill:#c14e4e;fill-opacity:1"
       d="m 207.4094,63.088744 h 95.25163 l 1.64938,16.081444 h 14.84441 l 0.41234,47.831992 -16.08144,1.64938 0.41235,30.51351 -96.07633,1.23703 -1.23703,-17.73082 h -16.90613 l 1.23703,-63.501092 16.90613,-0.412345 z"
       id="path1" />
    <path
       style="fill:#9c3d3d;fill-opacity:1"
       d="m 288.22897,95.663977 -0.41235,31.750543 17.73082,0.41234 -0.41234,-32.162883 z"
       id="path4" />
    <path
       style="fill:#8b3434;fill-opacity:1;stroke-width:1.13459"
       d="m 300.18697,78.757843 h 18.1844 l 2.02048,51.130747 h -18.1844 z"
       id="path2" />
    <path
       style="fill:#8b3434;fill-opacity:1"
       d="m 288.22897,127.41452 h 14.84441 l 1.23703,32.16289 -31.75054,0.41234 -0.82469,-16.90613 15.6691,0.41235 z"
       id="path3" />
    <path
       style="fill:#6f3030;fill-opacity:1"
       d="m 223.0785,15.6691 0.41234,14.84441 16.08145,1.649379 0.41234,31.750544 31.75055,-0.412345 0.41234,-16.493789 -17.73082,-0.824689 0.82469,-14.432066 -16.08145,-0.824689 V 14.432066 Z"
       id="path5" />
    <path
       style="fill:#4fa41d;fill-opacity:1"
       d="m 271.32283,30.925855 16.08145,0.412344 0.82469,16.49379 -17.31848,-0.82469 z"
       id="path6" />
  </g>
              </svg>`,
    "pinkheart": `<svg
   version="1.1"
   id="svg1"
   width="512"
   height="512"
   viewBox="0 0 512 512"
   sodipodi:docname="pinkheart.svg"
   inkscape:version="1.4 (e7c3feb1, 2024-10-09)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1" />
  <sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="1.7148438"
     inkscape:cx="281.36674"
     inkscape:cy="245.79499"
     inkscape:window-width="1472"
     inkscape:window-height="920"
     inkscape:window-x="0"
     inkscape:window-y="160"
     inkscape:window-maximized="0"
     inkscape:current-layer="g1" />
  <g
     inkscape:groupmode="layer"
     inkscape:label="Image"
     id="g1">
    <path
       style="fill:#ffd7e9;fill-opacity:1"
       d="m 185.7613,168.64899 h 7.83455 v -8.24689 l 23.50365,0.20617 -0.20617,8.2469 h 8.65924 v 8.65924 l 15.46292,-0.61852 0.41235,7.83455 h 16.08144 l -0.20617,-7.83455 8.2469,-0.20617 -0.41235,-8.2469 8.65924,0.20617 -0.41234,-7.21603 23.70982,-0.41234 0.20617,8.24689 h 15.46293 l 0.20617,7.62838 h 8.24689 l -0.20617,16.90613 8.04072,-0.20617 0.41235,32.16289 -8.86541,-0.41235 v 7.62838 l -8.04073,-0.61852 0.61852,8.45307 h -8.04072 l -0.20617,8.04072 -8.65924,0.20618 0.20617,15.87527 -7.4222,-0.41235 -0.20618,8.04073 -15.6691,0.20617 0.41235,8.45307 -8.45307,-0.61852 0.20617,8.04072 -8.45306,0.20617 v 7.62838 l -15.46293,-0.20617 v -8.2469 l -8.2469,0.20618 v -7.62838 l -7.62837,-0.20617 -0.20618,-7.83455 -16.28761,-0.41235 v -7.4222 l -8.04072,0.20617 0.20617,-9.07159 -7.42221,-0.20617 v -7.00986 l -7.83455,0.20617 -0.20617,-8.65924 h -8.45307 v -16.49378 h -8.04072 l -0.20617,-31.13203 9.07158,0.61852 0.20618,-16.49379 h 8.04072 z"
       id="path1" />
    <path
       style="fill:#ffffff;fill-opacity:1"
       d="m 289.25983,177.10206 0.20617,15.05058 16.28762,0.41235 -0.82469,-15.46293 z"
       id="path2" />
    <path
       style="fill:#ffffff;fill-opacity:1"
       d="m 296.88821,208.23409 0.41234,24.12216 8.45307,-0.20617 -0.61852,-24.12216 z"
       id="path3" />
  </g>
              </svg>`,
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


// a function that add a customised piece to the canva
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


// a function that add a circle to the canva
// export function addCircle(canvas) {
//   if (canvas) {
//     const circle = new Circle({
//       top: 150,
//       left: 150,
//       radius: 50,
//       fill: "#2F4DC6",
//     });
//     canvas.add(circle);
//   }
// }

// export Menus as a function to pass out the list of menu items
export function getMenus(canvas) {
  return [
    { 
      title: "face",
      icon: <LuCat />,
      submenu: true,
      submenuItems: [
        {
          title: "Square face",
          effect: () => addCustomisedShape(canvas, "squareface"),
          icon: <FaRegSquare />,
        },
        {
          title: "Bear face",
          effect: () => addCustomisedShape(canvas, "bearface"),
          icon: <RiBearSmileLine color="#8B4513" />,
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
          icon: <FaRegFaceFlushed color="#FFB6C1"/>,
        },
        {
          title: "Bear Smile",
          effect: () => addCustomisedShape(canvas, "bearsmile"),
          icon: <FaRegSmileWink />,
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
        {
          title: "cake",
          effect: () => addCustomisedShape(canvas, "cake"),
          icon: <BiCake color="#FFB6C1"/>,
        },
        {
          title: "birthday hat",
          effect: () => addCustomisedShape(canvas, "birthdayhat"),
          icon: <GiPartyHat color="#1E90FF"/>,
        },
        {
          title: "apple",
          effect: () => addCustomisedShape(canvas, "apple"),
          icon: <FaAppleWhole color="#CD5C5C"/>,
        },
        {
          title: "pink heart",
          effect: () => addCustomisedShape(canvas, "pinkheart"),
          icon: <FaRegHeart color="#ffd7e9"/>,
        },
      ],
    },
  ];
}
