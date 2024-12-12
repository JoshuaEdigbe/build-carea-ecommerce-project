// import React from "react";
// import "./Size.scss";

// function Size() {
//   return (
//       <div id="size-wrapper">
//         <h2 className="size-title">Size</h2>
//         <div className="size-btns">
//           <button>S</button>
//           <button> M</button>
//           <button>L</button>
//           <button>XL</button>
//           <button>XXL</button>
//         </div>
//       </div>
//   );
// }

// export default Size;

import React, { useContext, useEffect, useState } from "react";
import "./Size.scss";
import { GlobalContext } from "../../../../context/GlobalContext";

function Size() {
  const { products, setProducts, selectedSize, setSelectedSize } = useContext(GlobalContext);
  // const [selectedSize, setSelectedSize] = useState(null);

  const handleSize = () => {
    setProducts(products.filter((prod) => prod.size && prod.size.includes(selectedSize)));
  };
  
  useEffect(() => {
    if (selectedSize) {
      handleSize();
    }
  }, [selectedSize]);

  return (
    <div id="size-wrapper">
      <h2 className="size-title">Size</h2>
      <div className="size-btns">
        {["S", "M", "L", "XL", "XXL"].map((size) => (
          <button onClick={()=>setSelectedSize(size)} key={size}>
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Size;

