import { createContext, useState } from "react";
import { allProducts } from "../constants";

export const GlobalContext = createContext();

export const GlobalComponent = ({ children }) => {
  const [products, setProducts] = useState(allProducts);

  return (
    <GlobalContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
