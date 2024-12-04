import React from "react";
import "./Sidebar.scss";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import Size from "./Size/Size";

function Sidebar() {
  return (
    <div id="aside-bar">
      <Category />
      <Size />
      <Colors />
      <Price  />
    </div>
  );
}

export default Sidebar;
