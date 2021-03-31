import React from "react";
import ColoredPixel from "./ColoredPixel";
import useColorGenerator from "../hooks/colorGenerator";

/**
 * @author Ketan Bhalerao
 * @description This component generates array of ColoredPixel Components
 * based on props passed, list of props it accepts are given below
 * e.g if start - 8, end - 256, step - 8,
 * it will generate 32768 components with those many distinct r,g,b values
 *
 * @param {color_start, color_end, color_step} props
 */

function ColorCanvas(props) {
  const pixel_rgb_array = [];
  let counter = 1;
  for (let comp of useColorGenerator({ ...props })) {
    counter++;
    pixel_rgb_array.push(
      <ColoredPixel
        key={`value=${counter}`}
        red={comp.red}
        green={comp.green}
        blue={comp.blue}
      />
    );
  }

  return pixel_rgb_array;
}
export default ColorCanvas;
