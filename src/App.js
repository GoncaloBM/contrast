import React, { useState } from "react";
import "./App.css";
import "./Board.css";
import { ColorPicker } from "./components/ColorPicker";

function App() {
  const [boardColor, setBoardColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const defineBoardColor = (color) => {
    setBoardColor(color);
  };

  const defineTextColor = (color) => {
    setTextColor(color);
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
      />
      <ColorPicker
        text={"Choose your text Color"}
        defineColor={defineTextColor}
      />
    </div>
  );
}

export default App;
