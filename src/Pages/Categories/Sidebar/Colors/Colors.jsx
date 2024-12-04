import React from "react";
import "./Colors.scss";

function Colors() {
  return (
      <div id="colors-wrapper">
        <h2>Colors</h2>
        <div className="colors">
          <div className="semantic-blue"></div>
          <div className="semantic-yellow"></div>
          <div className="semantic-green"></div>
          <div className="primary-blue"></div>
        </div>
      </div>
  );
}

export default Colors;
