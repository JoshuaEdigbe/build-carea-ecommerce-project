import React, { useContext } from "react";
import ProductDetailCard from "../../components/ProductDetailCard/ProductDetailCard";
import { GlobalContext } from "../../context/GlobalContext";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

function ProductDetail() {
  const { products } = useContext(GlobalContext);
  const { id } = useParams();
  const product = products.find((prod) => prod.id === Number(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <ProductDetailCard
      img={product.img}
      name={product.name}
      availability={product.availability}
      price={product.price}
      description={product.description}
      feature={product.feature}
      color={product.color}
      size={product.size}
      review={product.review}
      cart={product.cart}
    />
  );
}

export default ProductDetail;
