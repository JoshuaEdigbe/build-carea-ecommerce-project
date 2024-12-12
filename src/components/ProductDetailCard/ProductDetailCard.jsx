import React from "react";
import "./ProductDetailCard.scss";
import { Button } from "../Button/Button";
import { ReviewBtn } from "../ReviewBtn/ReviewBtn";
import { CartButton } from "../CartButton/Cart-Button";

const ProductDetailCard = ({
  img,
  name,
  availability,
  price,
  description,
  feature,
  color,
  size,
  review,
  cart,
}) => {
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
                <ReviewBtn label={review} className="item-review" />
              </div>
              <div className="card-item-stock">
                <Button
                  label={availability}
                  className="card-item-availability"
                />
              </div>
            </div>
          </div>
          <h1 className="item-price">{price}</h1>
          <div className="color-availability">
            <p>AVAILABLE COLORS</p>
            <div className="colors">{color}</div>
          </div>
          <div className="size-selection">
            <p>SELECT SIZE</p>
            <div className="size">{size}</div>
          </div>
          <div className="quantity">
            <p className="minus">-</p>
            <p className="number">1</p>
            <p className="plus">+</p>
          </div>
          <div className="item-add-to-cart">
            <CartButton label={cart} className="" />
          </div>
          <div className="free-shipping">-FREE SHIPPING ON ORDERS $100+</div>
        </div>
      </div>
      <div className="full-description"></div>
    </div>
  );
};

export default ProductDetailCard;
