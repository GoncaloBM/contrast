import React, { useState } from "react";
import "./App.css";
import "./Board.css";
import { ColorPicker } from "./components/ColorPicker";

function App() {
  const [boardColor, setBoardColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [buttonType, setButtonType] = useState("");
  const [textOfColor, setTextOfColor] = useState("");
  const [changingColor, setChangingColor] = useState(false);

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

  const defineRgbType = (type) => {
    if (type === 0 || type === 1) {
      setTextOfColor(
        "Change red using up and down arrow, press Enter to finnish that color"
      );
    } else if (type === 2) {
      setTextOfColor("Changing green, press Enter to finnish that color");
    } else if (type === 3) {
      setTextOfColor("Changing blue, press Enter to finnish that color");
    }
  };

  const changeColor = () => {
    setChangingColor(!changingColor);
  };

  return (
    <div className="App">
      <h2 className="layoutName">Your Layout</h2>
      <div className="board" style={{ backgroundColor: `${boardColor}` }}>
        <div className="text" style={{ color: `${textColor}` }}>
          <h2>Star Wars - The Last Jedi</h2>
          <h4 className="mediumtext">
            A small river named Duden flows by their place and supplies it.
          </h4>
          <h5 className="mediumtext">
            Far far away, behind the word mountains, far from the countries
            Vokalia and a Consonantia, there live the blind texts. Separated
            they live in Bookmarksgrove right at the coast of the Semantics, a
            large language ocean.
          </h5>
        </div>
      </div>
      <div className="ButtonLeft">
        <ColorPicker
          className="button"
          text={"Choose your Board Color"}
          defineColor={defineBoardColor}
          button={"board"}
          defineButton={defineButton}
          initialColor={boardColor}
          defineRgbType={defineRgbType}
          changeColor={changeColor}
          changingColor={changingColor}
        />
      </div>
      <div className="ButtonRight">
        <ColorPicker
          text={"Choose your Text Color"}
          defineColor={defineTextColor}
          button={"text"}
          defineButton={defineButton}
          initialColor={textColor}
          defineRgbType={defineRgbType}
          changeColor={changeColor}
          changingColor={changingColor}
        />
      </div>
      <p>
        If on TV, press left arrow to change text color and right arrow to change board
        color
      </p>
      {changingColor && (
        <div>
          <p>Changing {buttonType} color.</p>
          <p>{textOfColor}</p>
          {buttonType === "board" ? boardColor : textColor}
        </div>
      )}
    </div>
  );
}

export default App;
