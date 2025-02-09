import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString()); 
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput(""); 
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7", "8", "9", "+",
    "4", "5", "6", "-",
    "1", "2", "3", "*",
    "C", "0", "=", "/"
  ];

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <div className="display">{input || "0"}</div>
        <div className="button-grid">
          {buttons.map((btn) => (
            <button key={btn} onClick={() => handleButtonClick(btn)} className="calc-button">
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
