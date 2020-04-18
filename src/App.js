import React, { useState, useEffect } from "react";
import useEventListener from "./use-event-listener";
import "./App.css";
import "./Board.css";
import { ColorPicker } from "./components/ColorPicker";

function App() {
  const [boardColor, setBoardColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [buttonType, setButtonType] = useState("");

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

  return (
    <div className="App">
      <div className="board" style={{ backgroundColor: `${boardColor}` }}>
        <div className="text" style={{ color: `${textColor}` }}>
          Hey
        </div>
      </div>
      <ColorPicker
        text={"Choose your board Color"}
        defineColor={defineBoardColor}
        button={"board"}
        defineButton={defineButton}
      />
      <ColorPicker
        text={"Choose your text Color"}
        defineColor={defineTextColor}
        button={"text"}
        defineButton={defineButton}
      />
    </div>
  );
}

export default App;
