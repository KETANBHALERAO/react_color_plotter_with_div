/**
 * @author Ketan Bhalerao
 * @description This component generates array of ColoredPixel Components
 * based on props passed, list of props it accepts are given below
 * e.g if start - 8, end - 256, step - 8,
 * it will generate 32768 components with those many distinct r,g,b values
 *
 * @param {color_start, color_end, color_step}
 */

function* usetColorGenerator({ color_start, color_end, color_step }) {
  for (let i = color_end; i >= color_start; i = i - color_step) {
    for (let j = color_end; j >= color_start; j = j - color_step) {
      for (let k = color_end; k >= color_start; k = k - color_step) {
        yield {
          red: k,
          green: j,
          blue: i
        };
      }
    }
  }
}

export default usetColorGenerator;
