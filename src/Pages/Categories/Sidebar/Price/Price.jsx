import React, { useState } from "react";
import Input from "../..//../../components/Input/Input";
import "./Price.scss";

function Price() {
  const [value, setValue] = useState([100, 1200])
  
  return (
    <div id="price-wrapper">
      <h2>Price</h2>
    </div>
  );
}

export default Price;
