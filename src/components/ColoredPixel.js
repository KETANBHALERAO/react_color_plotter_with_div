/**
 * @author Ketan Bhalerao
 * @description This component generates div
 * with background color specified by props red, green, blue
 * e.g if red - 80, green - 80, blue - 16, which is #505010 in hex
 * will generate color similar to Henna
 *
 * @todo - We are hardcoding pixels height,width size to 1px,
 * which can be converted to config based
 *
 * @param {red, green, blue} props
 */

function ColoredPixel({ red, green, blue }) {
  var style_obj = {
    backgroundColor: "rgb(" + red + "," + green + "," + blue + ")",
    height: "1px",
    width: "1px"
  };
  return <div role="div" style={style_obj} />;
}

export default ColoredPixel;
