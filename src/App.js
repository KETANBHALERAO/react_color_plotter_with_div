import React from "react";
import ColorCanvas from "./components/ColorCanvas";
import "./App.css";
import PROJECT_CONSTANTS from "./config";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  top: 50%;
  left: 50%;
  margin: auto;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;

function App() {
  return (
    <div className="App">
      <h1>Color Plotted Image</h1>
      <FlexBox
        height={PROJECT_CONSTANTS.PLOTTER_HEIGHT}
        width={PROJECT_CONSTANTS.PLOTTER_WIDTH}
      >
        <ColorCanvas
          color_start={PROJECT_CONSTANTS.COLOR_START}
          color_end={PROJECT_CONSTANTS.COLOR_END}
          color_step={PROJECT_CONSTANTS.STEPS}
        />
      </FlexBox>
    </div>
  );
}

export default App;
