import React from "react";
import "./Loader.css"; // Optional: create a separate CSS file or include styles in App.css

export default function Loader({ text = "Loading..." }) {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  );
}
