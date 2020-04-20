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
}) => {
  const [visiblePallete, setVisiblePallete] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(initialColor);
  const [rgbColor, setRgbColor] = useState({
    choose: 0,
  });

  const keyboardChoser = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      if (rgbColor.choose === 3) {
        setRgbColor({
          ...rgbColor,
          choose: 0,
        });
      } else
        setRgbColor({
          ...rgbColor,
          choose: rgbColor.choose + 1,
        });
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
    setRgbColor({
      ...rgbColor,
      choose: 1,
      r: color.rgb.r,
      g: color.rgb.g,
      b: color.rgb.b,
    });
    setBackgroundColor(color.hex);
    defineColor(color.hex);
    defineRgbType(rgbColor.choose);
  };

  const click = () => {
    setVisiblePallete(!visiblePallete);
    defineButton(button);
  };

  const openWithKeyboard = (e) => {
    e.preventDefault();

    if (e.keyCode === 37 && button === "text") {
      setVisiblePallete(!visiblePallete);
      defineButton(button);
    } else if (e.keyCode === 39 && button === "board") {
      setVisiblePallete(!visiblePallete);
      defineButton(button);
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
          onChangeComplete={handleChangeComplete}
        />
      )}
    </div>
  );
};
