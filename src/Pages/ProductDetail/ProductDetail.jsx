import React, { useContext } from "react";
import ProductDetailCard from "../../components/ProductDetailCard/ProductDetailCard";
import { GlobalContext } from "../../context/GlobalContext";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import DescriptionBox from "../../components/DescriptionBox/DescriptionBox";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";

function ProductDetail() {
  const { products } = useContext(GlobalContext);
  const { id } = useParams();

  if (!products || products.length === 0) {
    return <p>Loading products...</p>;
  }

  const product = products.find((prod) => prod.id === Number(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <ProductDetailCard
        id={product.id}
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
      <DescriptionBox
        description={product.description}
        features={product.features}
        review={product.review}
        reviewDetail={product.reviewDetail}
      />
      <SimilarProducts />
    </div>
  );
}

export default ProductDetail;
