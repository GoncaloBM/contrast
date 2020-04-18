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
      <h2 className="layoutName">Your Layout</h2>
      <div className="board" style={{ backgroundColor: `${boardColor}` }}>
        <div className="text" style={{ color: `${textColor}` }}>
          <h2>Star Wars - The Last Jedi</h2>
          <h4 className="mediumtext">A small river named Duden flows by their place and supplies it.</h4>
          <h5 className="mediumtext">Far far away, behind the word mountains, far from the countries Vokalia and a Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h5>
        </div>
      </div>
      <div className="ButtonLeft">
      <ColorPicker className="button"
        text={"Choose your Board Color"}
        defineColor={defineBoardColor}
        button={"board"}
        defineButton={defineButton}
      />
       </div>
       <div className="ButtonRight">
      <ColorPicker
        text={"Choose your Text Color"}
        defineColor={defineTextColor}
        button={"board"}
        defineButton={defineButton}
      />
      </div>
    </div>
  );
}

export default App;
