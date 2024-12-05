import React, { useContext, useState } from "react";
import "./Category.scss";
import { GlobalContext } from "../../../../context/GlobalContext";
import { useActionData } from "react-router-dom";
import { allProducts } from "../../../../constants";

function Category() {
  const [filter, setFilter] = useState("all");
  const { setProducts } = useContext(GlobalContext);
  
  const handleChange = (e) => {
    setFilter(e.target.value);
    if (e.target.value == "all") {
      return setProducts(allProducts);
    }
    const filtered = allProducts.filter((prod) => {
      return prod.category == e.target.value;
    });
    setProducts(filtered);
  };

  return (
    <div id="categories-wrapper">
      <div className="categories">
        <h2>Categories</h2>
        <form>
          <label className="category">
            <input
              type="radio"
              name="option"
              value={"all"}
              checked={filter == "all"}
              onChange={handleChange}
              className="radio-button"
            />
            <span className="checkmark"></span>
            All Products
          </label>
          <label className="category">
            <input
              type="radio"
              name="option"
              value={"clothing"}
              checked={filter == "clothing"}
              onChange={handleChange}
              className="radio-button"
            />
            <span className="checkmark"></span>
            Clothing
          </label>
          <label className="category">
            <input
              type="radio"
              name="option"
              value={"perfume"}
              checked={filter == "perfume"}
              onChange={handleChange}
              className="radio-button"
            />
            <span className="checkmark"></span>
            Perfume
          </label>
          <label className="category">
            <input
              type="radio"
              name="option"
              value={"trousers"}
              checked={filter === "trousers"}
              onChange={handleChange}
              className="radio-button"
            />
            <span className="checkmark"></span>
            Trousers
          </label>
          <label className="category">
            <input
              type="radio"
              name="option"
              value={"shoe"}
              checked={filter === "shoe"}
              onChange={handleChange}
              className="radio-button"
            />
            <span className="checkmark"></span>
            Shoe
          </label>
          <label className="category">
            <input
              type="radio"
              name="option"
              value={"handbag"}
              checked={filter === "handbag"}
              onChange={handleChange}
              className="radio-button"
            />
            <span className="checkmark"></span>
            Handbag
          </label>
          <label className="category">
            <input
              type="radio"
              name="option"
              value={"hat"}
              checked={filter === "hat"}
              onChange={handleChange}
              className="radio-button"
            />
            <span className="checkmark"></span>
            Hat
          </label>
          <label className="category">
            <input
              type="radio"
              name="option"
              value={"thermos"}
              checked={filter == "thermos"}
              onChange={handleChange}
              className="radio-button"
            />
            <span className="checkmark"></span>
            Thermos
          </label>
        </form>
      </div>
    </div>
  );
}

export default Category;
