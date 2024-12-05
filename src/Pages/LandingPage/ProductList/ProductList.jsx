import { useState } from "react";
import { Button } from "../../../components/Button/Button";
import Format from "../../../components/Format/Format";
import Card from "../../../components/Card/Card";
import { ProductArr } from "../../../constants";
import { LatestArr } from "../../../constants";
import "./ProductList.scss";

const ProductList = () => {
  const [isFeatureMenu, setIsFeatureMenu] = useState(true);

  const handleFeatureClick = () => {
    setIsFeatureMenu(true);
  };

  const handleLatestClick = () => {
    setIsFeatureMenu(false);
  };

  return (
    <Format>
      <div className="productList">
        <div className="productList_btn">
          <Button
            label="feature"
            className={`btnClick ${isFeatureMenu ? "active" : ""}`}
            onClick={handleFeatureClick}
          />
          <Button
            label="latest"
            className={`btnClick ${!isFeatureMenu ? "active" : ""}`}
            onClick={handleLatestClick}
          />
        </div>
        <div className="productList_items">
          {(isFeatureMenu ? ProductArr : LatestArr).map((item) => (
            <Card
              key={item.id}
              img={item.img}
              name={item.name}
              availability={item.availability}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </Format>
  );
};

export default ProductList;
