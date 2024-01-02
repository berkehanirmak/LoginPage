import React from "react"
import "./button.css"
const Button = ({ text, onClick, disabled }) => {
    return (
      <button
        className="custom-button"
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    );
  };
export default Button