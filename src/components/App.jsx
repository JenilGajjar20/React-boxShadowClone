import React, { useState } from "react";

function App() {
  const [horizontal, setHorizontal] = useState(10);
  const [vertical, setVertical] = useState(10);
  const [blur, setBlur] = useState(10);
  const [color, setColor] = useState("black");
  const [checkBox, setCheckBox] = useState(false);

  return (
    <div className="App">
      <div className="controls">
        <label>Horizontal Length</label>
        <input
          type="range"
          min="-200"
          max="200"
          value={horizontal}
          onChange={(event) => {
            setHorizontal(event.target.value);
          }}
        />
        <label>Verical Length</label>
        <input
          type="range"
          min="-200"
          max="200"
          value={vertical}
          onChange={(event) => {
            setVertical(event.target.value);
          }}
        />
        <label>Blur</label>
        <input
          type="range"
          min="0"
          max="200"
          value={blur}
          onChange={(event) => {
            setBlur(event.target.value);
          }}
        />
        <label>Color</label>
        <input
          type="color"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        <div className="switch">
          <label>
            Opacity
            <input
              type="checkbox"
              checked={checkBox}
              onChange={() => {
                setCheckBox(!checkBox);
              }}
            />
            <span className="lever"></span>
            inset
          </label>
        </div>
      </div>
      <div className="output">
        <div
          className="box"
          style={{
            boxShadow: `${
              checkBox ? "inset" : ""
            } ${horizontal}px ${vertical}px ${blur}px ${color}`,
          }}
        >
          <p>
            Box-Shadow: {checkBox && "inset"} {horizontal}px {vertical}px {blur}
            px {color}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
