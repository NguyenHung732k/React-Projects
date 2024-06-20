import React, { useEffect, useState } from "react";
import "./RandomColorStyles.css";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#ffffff");

  const randomNumber = (length) => {
    return Math.floor(Math.random() * length);
  };

  const randomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumber(hex.length)];
    }

    setColor(hexColor);
  };

  const randomRGBColor = () => {
    const r = randomNumber(256);
    const g = randomNumber(256);
    const b = randomNumber(256);

    setColor(`rgb(${r},${g}, ${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") {
      randomRGBColor();
    } else {
      randomHexColor();
    }
  }, [typeOfColor]);

  return (
    <div className="color-container">
      <div style={{ backgroundColor: color }} className="color-view">

        <div className="color-info">
          <h3> {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
          <h1>{color}</h1>
        </div>

      </div>

      <div className="color-button-group">
        <button className="color-button" onClick={() => setTypeOfColor("hex")}><span>Create HEX Color</span></button>
        <button className="color-button" onClick={() => setTypeOfColor("rgb")}><span>Create RGB Color</span></button>
        <button className="color-button" onClick={typeOfColor === "hex" ? randomHexColor : randomRGBColor}><span>Generate Random Color</span></button>
      </div>
    </div>
  );
};

export default RandomColor;
