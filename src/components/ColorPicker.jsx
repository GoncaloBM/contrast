import React, { useState } from "react";
import { SketchPicker } from "react-color";
import './ColorPicker.css'

export const ColorPicker = () => {
  const [visiblePallete, setVisiblePallete] = useState(false);
  const [color, setColor] = useState({ background: "#fff" });

  const handleChangeComplete = (color) => {
    setColor({ ...color, background: color.hex });
  };

  return (
    <div className='color-picker'>
      <button onClick={() => setVisiblePallete(!visiblePallete)}>
        Choose your color
      </button>
      {visiblePallete && (
        <SketchPicker
          color={color.background}
          onChangeComplete={handleChangeComplete}
        />
      )}
    </div>
  );
};
