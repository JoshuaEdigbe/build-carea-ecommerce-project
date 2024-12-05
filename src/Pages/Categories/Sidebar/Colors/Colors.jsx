import React, { useContext, useEffect, useState } from "react";
import "./Colors.scss";
import { GlobalContext } from "../../../../context/GlobalContext";

function Colors() {
  const [selectedColor, setSelectedColor] = useState(null);
  const { products, setProducts } = useContext(GlobalContext);

  const handleChangeColor = () => {
    setProducts(products.filter(prod => prod.color && prod.color.includes(selectedColor)));
  }

  useEffect(() => {
    if (selectedColor) {
      handleChangeColor();
    }
  }, [selectedColor]);
  
  return (
      <div id="colors-wrapper">
        <h2>Colors</h2>
        <div className="colors">
          <div onClick={()=>setSelectedColor("semantic-blue")} className="semantic-blue"></div>
          <div onClick={()=>setSelectedColor("semantic-yellow")} className="semantic-yellow"></div>
          <div onClick={()=>setSelectedColor("semantic-green")} className="semantic-green"></div>
          <div onClick={()=>setSelectedColor("primary-blue")} className="primary-blue"></div>
        </div>
      </div>
  );
}

export default Colors;
