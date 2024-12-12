import { createContext, useState } from "react";
import { allProducts } from "../constants";

export const GlobalContext = createContext();

export const GlobalComponent = ({ children }) => {
  const [products, setProducts] = useState(allProducts);
  const [filter, setFilter] = useState("all");
  const [selectedSize, setSelectedSize] = useState(null);

  const handleCloseSizeFilter = () => {
    if (filter == "all") {
      return setProducts(allProducts);
      setSelectedSize(null);
    }
    setProducts(allProducts.filter((prod) => prod.category == filter));
    setSelectedSize(null);
  };

  const handleCloseCategoryFilter = () => {
    setProducts(allProducts)
    setFilter("all");
    setSelectedSize(null);
  };

  return (
    <GlobalContext.Provider
      value={{
        products,
        setProducts,
        filter,
        setFilter,
        selectedSize,
        setSelectedSize,
        handleCloseSizeFilter,
        handleCloseCategoryFilter
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
