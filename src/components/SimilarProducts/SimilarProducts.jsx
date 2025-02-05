import React, { useContext } from "react";
import "./SimilarProducts.scss";
import { GlobalContext } from "../../context/GlobalContext";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";

function SimilarProducts() {
  const { products } = useContext(GlobalContext);
  const { id } = useParams();
  const currentProduct = products.find((product) => product.id === Number(id));
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const SimilarProducts = shuffleArray(
    products.filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id
    )
  ).slice(0, 4);
  return (
    <div id="similar-products">
      <div className="similar-products-header">
        <h1>You might also like</h1>
        <p>SIMILAR PRODUCTS</p>
      </div>
      <div className="similar-products-list">
        {SimilarProducts.map((product, index) => {
          return (
            <Card
              key={index}
              id={product.id}
              img={product.img}
              availability={product.availability}
              name={product.name}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SimilarProducts;