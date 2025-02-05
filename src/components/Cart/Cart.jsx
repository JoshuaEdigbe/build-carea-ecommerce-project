import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import "./Cart.scss";

const getColorCode = (colorName) => {
  const colorMap = {
    "semantic-blue": "#a3bef8",
    "semantic-yellow": "#ffd58a",
    "semantic-green": "#83b18b",
    "primary-blue": "#4078ff",
  };
  return colorMap[colorName] || "#ccc"; // default color if not found
};

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity } =
    useContext(GlobalContext);

  const totalCartPrice = cart.reduce(
    (acc, item) =>
      acc + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
              <p>Price per item: {item.price}</p>

              <div className="selected-colors">
                <p>Selected Colors:</p>
                <div className="color-circles">
                  {item.selectedColors.length > 0 ? (
                    item.selectedColors.map((clr, index) => (
                      <span
                        key={index}
                        className={`color-circle ${clr}`}
                        style={{ backgroundColor: getColorCode(clr) }}
                      ></span>
                    ))
                  ) : (
                    <p>No color selected</p>
                  )}
                </div>
              </div>

              <p>
                Selected Size:
                {item.selectedSizes.length > 0
                  ? item.selectedSizes.join(", ")
                  : " None"}
              </p>

              <div className="quantity-controls">
                <button onClick={() => updateCartQuantity(item.id, "decrease")}>
                  -
                </button>
                <p>{item.quantity}</p>
                <button onClick={() => updateCartQuantity(item.id, "increase")}>
                  +
                </button>
              </div>

              <p>
                Total Price: $
                {(
                  parseFloat(item.price.replace("$", "")) * item.quantity
                ).toFixed(2)}
              </p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}

          <div className="cart-total">
            <h3>Total Amount: ${totalCartPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
