const PROJECT_CONSTANTS = {
  /*
  RGB - Red, Green, Blue Color Model 
  follows 2 Digit HEX Number format
  which in decimal representation 
  ranges from 0 to 256
  
  Color Start & End is any number between above range

  It along with Steps is used to generate range of colors 
  e.g if start - 8, end 256, step - 8, below sequence/array will be generated 
  & will be plottd in 
  DIV/Region of dimension 128 x 256

  8 8 8
  8 8 16
  ...
  8 8 256

  8 16 8
  8 16 16
  ...
  8 16 256
  ...
  256 256 256
  */
  COLOR_START: 8,
  COLOR_END: 256,
  STEPS: 8,
  /*
  PLOTTER HEIGHT, WIDTH in pixels
   */
  PLOTTER_HEIGHT: 128,
  PLOTTER_WIDTH: 256
};

export default PROJECT_CONSTANTS;
