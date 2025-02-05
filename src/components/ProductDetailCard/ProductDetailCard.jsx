import React, { useContext, useState } from "react";
import "./ProductDetailCard.scss";
import { Button } from "../Button/Button";
import { ReviewBtn } from "../ReviewBtn/ReviewBtn";
import { CartButton } from "../CartButton/Cart-Button";
import { CiHeart } from "react-icons/ci";
import { GlobalContext } from "../../context/GlobalContext";

const ProductDetailCard = ({
  id,
  img,
  name,
  availability,
  price,
  color,
  size,
  cart,
  review,
}) => {
  const { addToCart } = useContext(GlobalContext);

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleColorSelect = (clr) => {
    setSelectedColors((prevColors) => {
      if (prevColors.includes(clr)) {
        return prevColors.filter((c) => c !== clr);
      } else {
        return [...prevColors, clr];
      }
    });
  };

  const handleSizeSelect = (sz) => {
    setSelectedSizes((prevSizes) => {
      if (prevSizes.includes(sz)) {
        return prevSizes.filter((s) => s !== sz);
      } else {
        return [...prevSizes, sz];
      }
    });
  };

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  const handleAddToCart = () => {
    if (
      (size && selectedSizes.length === 0) ||
      (color && selectedColors.length === 0)
    ) {
      alert("Please select a size and color before adding to cart.");
      return;
    }
    addToCart({
      id,
      img,
      name,
      price,
      selectedColors,
      selectedSizes,
      quantity,
    });
  };

  return (
    <div id="individual_product-detail">
      <div className="item-wrapper">
        <div className="img_container">
          <img src={img} alt="" />
        </div>
        <div className="item-properties">
          <h3 className="item-name">{name}</h3>
          <div>
            <div className="rating">
              <div className="item-rating">
                <ReviewBtn
                  label={
                    review ? (
                      <span>
                        <span className="review-one">
                          {review.review1 || "N/A"}
                        </span>{" "}
                        -
                        <span className="review-two">
                          {review.review2 || "N/A"}
                        </span>
                      </span>
                    ) : (
                      "Not yet rated."
                    )
                  }
                  className="item-review"
                />
              </div>
              <div className="card-item-stock">
                <Button
                  label={availability}
                  className="card-item-availability"
                />
              </div>
            </div>
          </div>
          <h4 className="item-price">{price}</h4>

          {color && color.length > 0 && (
            <div className="color-availability">
              <p>AVAILABLE COLORS</p>
              <div className="colors">
                {color.map((clr, index) => (
                  <span
                    key={index}
                    className={`color-circle ${clr} ${
                      selectedColors.includes(clr) ? "selected" : ""
                    }`}
                    onClick={() => handleColorSelect(clr)}
                  ></span>
                ))}
              </div>
            </div>
          )}

          {size && size.length > 0 && (
            <div className="size-selection">
              <p>SELECT SIZE</p>
              <div className="sizes">
                {size.map((sz, index) => (
                  <span
                    key={index}
                    className={`size-box ${
                      selectedSizes.includes(sz) ? "selected" : ""
                    }`}
                    onClick={() => handleSizeSelect(sz)}
                  >
                    {sz}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="quantity-selection-wrapper">
            <p>QUANTITY</p>
            <div className="quantity-selection">
              <p
                className="minus"
                onClick={() => handleQuantityChange("decrease")}
              >
                -
              </p>
              <p className="count">{quantity}</p>
              <p
                className="plus"
                onClick={() => handleQuantityChange("increase")}
              >
                +
              </p>
            </div>
          </div>

          <div className="item-add-to-cart">
            <CartButton
              onClick={handleAddToCart}
              label={cart}
              className="add-to-cart-button"
            />
            <CiHeart className="heart" />
          </div>
          <div className="free-shipping">- FREE SHIPPING ON ORDERS $100+</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
