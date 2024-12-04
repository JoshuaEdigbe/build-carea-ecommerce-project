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

import React, { useContext } from "react";
import "./Size.scss";

function Size() {

  return (
    <div id="size-wrapper">
      <h2 className="size-title">Size</h2>
      <div className="size-btns">
        {["S", "M", "L", "XL", "XXL"].map((size) => (
          <button key={size}>
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Size;

