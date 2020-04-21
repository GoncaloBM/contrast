import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "./ColorPicker.css";
import useEventListener from "./../use-event-listener";
import { rgbToHex } from "./RGBtoHex";

export const ColorPicker = ({
  defineColor,
  text,
  defineButton,
  button,
  initialColor,
  defineRgbType,
  changeColor,
  changingColor,
}) => {
  const [visiblePallete, setVisiblePallete] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(initialColor);
  const [rgbColor, setRgbColor] = useState({
    choose: 0,
    r: 0,
    g: 0,
    b: 0,
  });
  const [isTV, setIsTV] = useState(false);

  const keyboardChoser = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      if (rgbColor.choose === 3) {
        setRgbColor({
          ...rgbColor,
          choose: 1,
        });
      } else {
        setRgbColor({
          ...rgbColor,
          choose: rgbColor.choose + 1,
        });
      }
    }

    if (rgbColor.choose === 1) {
      if (e.keyCode === 38) {
        setRgbColor({
          ...rgbColor,
          r: rgbColor.r + 1,
          g: rgbColor.g,
          b: rgbColor.b,
        });
      } else if (e.keyCode === 40) {
        setRgbColor({
          ...rgbColor,
          r: rgbColor.r - 1,
          g: rgbColor.g,
          b: rgbColor.b,
        });
      }
    }

    if (rgbColor.choose === 2) {
      if (e.keyCode === 38) {
        setRgbColor({
          ...rgbColor,
          r: rgbColor.r,
          g: rgbColor.g + 1,
          b: rgbColor.b,
        });
      } else if (e.keyCode === 40) {
        setRgbColor({
          ...rgbColor,
          r: rgbColor.r,
          g: rgbColor.g - 1,
          b: rgbColor.b,
        });
      }
    }

    if (rgbColor.choose === 3) {
      if (e.keyCode === 38) {
        setRgbColor({
          ...rgbColor,
          r: rgbColor.r,
          g: rgbColor.g,
          b: rgbColor.b + 1,
        });
      } else if (e.keyCode === 40) {
        setRgbColor({
          ...rgbColor,
          r: rgbColor.r,
          g: rgbColor.g,
          b: rgbColor.b - 1,
        });
      }
    }

    setBackgroundColor(rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b));
    defineColor(rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b));
    defineRgbType(rgbColor.choose);
  };

  const handleChangeComplete = (color) => {
    setBackgroundColor(color.hex);
    defineColor(color.hex);
  };

  const handleChangeCompleteTV = () => {
      setRgbColor({
        ...rgbColor,
        choose: 1,
      });


    setBackgroundColor(backgroundColor);
    defineColor(backgroundColor);
  };

  const click = () => {
    setVisiblePallete(!visiblePallete);
    defineButton(button);
  };

  const openWithKeyboard = (e) => {
    e.preventDefault();

    if (e.keyCode === 37 && button === "text") {
      setIsTV(true);
      click();
      changeColor();
      handleChangeCompleteTV();
    } else if (e.keyCode === 39 && button === "board") {
      setIsTV(true);
      click();
      changeColor();
      handleChangeCompleteTV();
    }
  };

  useEventListener("keydown", keyboardChoser);
  useEventListener("keydown", openWithKeyboard);
  return (
    <div className="color-picker">
      <button onClick={click}>{text}</button>
      {visiblePallete && (
        <SketchPicker
          color={backgroundColor}
          onChangeComplete={
            isTV ? handleChangeCompleteTV : handleChangeComplete
          }
        />
      )}
    </div>
  );
};
