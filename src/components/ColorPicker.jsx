import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "./ColorPicker.css";

export const ColorPicker = ({ defineColor,text }) => {
  const [visiblePallete, setVisiblePallete] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const handleChangeComplete = (color) => {
    setBackgroundColor(color.hex);

    defineColor(color.hex);
  };

  return (
    <div className="color-picker">
      <button onClick={() => setVisiblePallete(!visiblePallete)}>
        {text}
      </button>
      {visiblePallete && (
        <SketchPicker
          color={backgroundColor}
          onChangeComplete={handleChangeComplete}
        />
      )}
      {/* <button onClick={() => console.log(color.background)}></button> */}
    </div>
  );
};
