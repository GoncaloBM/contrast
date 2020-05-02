import React, { useState } from "react";
import "./App.css";
import "./Board.css";
import { ColorPicker } from "./components/ColorPicker";
import { SafeZone } from "./components/SafeZone";
import { Board } from "./components/Board";
import useEventListener from "./use-event-listener";
import classNames from "classnames";

function App() {
  const [boardColor, setBoardColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [buttonType, setButtonType] = useState("");
  const [textOfColor, setTextOfColor] = useState(
    "Press right arrow to change board color and left arrow to change text color"
  );
  const [changingColor, setChangingColor] = useState(false);
  const [safeZoneVisible, setSafeZoneVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [colorType, setColorType] = useState("");

  const defineVisiblePalete = () => {
    setVisible(!visible);
  };

  const defineBoardColor = (color) => {
    if (buttonType === "board") {
      setBoardColor(color);
    }
  };

  const defineTextColor = (color) => {
    if (buttonType === "text") {
      setTextColor(color);
    }
  };

  const defineButton = (button) => {
    setButtonType(button);
  };

  const instructions = (rgbType) => {
    // alert(`hey ${buttonType}`)
    if (rgbType === 0) {
      setTextOfColor(
        "Press right arrow to change board color and left arrow to change text color"
      );
    } else if (rgbType === 1) {
      setTextOfColor("Changing red, press Enter to finnish that color");
      setColorType("red");
    } else if (rgbType === 2) {
      setTextOfColor("Changing green, press Enter to finnish that color");
      setColorType("green");
    } else if (rgbType === 3) {
      setTextOfColor("Changing blue, press Enter to finnish that color");
      setColorType("blue");
    }
  };

  const changeColor = () => {
    setChangingColor(!changingColor);
  };

  const showingSafeZone = (e) => {
    // if click on space it will show safeZone area
    if (e.keyCode === 32) {
      setSafeZoneVisible(!safeZoneVisible);
    }
  };

  useEventListener("keydown", showingSafeZone);

  return (
    <div className="App">
      <h2 className="layoutName">This is your Layout</h2>

      <h3 className="instructions">Press Space Button so show safe area.</h3>
      <h3 className="instructions">
        Press + and - buttons to increase and decrease font size and{" "}
        <strong>Shift</strong> to add/remove Peacock font.
      </h3>
      <Board
        boardColor={boardColor}
        textColor={textColor}
        safeZoneVisible={safeZoneVisible}
      />

      <div className="ActionMenu">
        <div className="ActionButton">
          <div className="top"></div>
          <div className="pickerstyle2">
            <ColorPicker
              className="button"
              text={"Board"}
              defineColor={defineBoardColor}
              button={"board"}
              defineButton={defineButton}
              buttonType={buttonType}
              initialColor={boardColor}
              instructions={instructions}
              changeColor={changeColor}
              changingColor={changingColor}
              defineVisiblePalete={defineVisiblePalete}
            />
          </div>
          <div className="left" style={{ marginTop: visible && "35%" }}></div>
          <div className="right"></div>
          <div className="pickerstyle" style={{ marginTop: visible && "35%" }}>
            <ColorPicker
              text={"Text"}
              defineColor={defineTextColor}
              button={"text"}
              defineButton={defineButton}
              buttonType={buttonType}
              initialColor={textColor}
              instructions={instructions}
              changeColor={changeColor}
              changingColor={changingColor}
              defineVisiblePalete={defineVisiblePalete}
            />
          </div>
          <div className="down" style={{ top: visible && "4%" }}></div>
          <div className="hexaTab">
            <p className="aligntext">{textOfColor}</p>
            {buttonType && (
              <>
                {/* <p className="aligntext">Changing {buttonType} color.</p> */}
                <p className="hexadecimal" style={{ color: colorType }}>
                  {buttonType === "board" ? boardColor : textColor}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
