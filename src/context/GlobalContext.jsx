import { createContext, useState } from "react";
import { allProducts } from "../constants";

export const GlobalContext = createContext();

export const GlobalComponent = ({ children }) => {
  const [products, setProducts] = useState(allProducts);
  const [filter, setFilter] = useState("all");
  const [selectedSize, setSelectedSize] = useState(null);
  const [cart, setCart] = useState([]);

  const handleCloseSizeFilter = () => {
    if (filter == "all") {
      return setProducts(allProducts);
      setSelectedSize(null);
    }
    setProducts(allProducts.filter((prod) => prod.category == filter));
    setSelectedSize(null);
  };

  const handleCloseCategoryFilter = () => {
    setProducts(allProducts);
    setFilter("all");
    setSelectedSize(null);
  };

  const updateCartQuantity = (productId, action) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === productId) {
          const newQuantity =
            action === "increase" ? item.quantity + 1 : item.quantity - 1;

          return {
            ...item,
            quantity: newQuantity < 1 ? 1 : newQuantity, // Prevent negative quantity
            selectedSizes:
              newQuantity === 1 ? [item.selectedSizes[0]] : item.selectedSizes, // Keep only one size if quantity is 1
          };
        }
        return item;
      });
    });
  };

  // const addToCart = (product) => {
  //   setCart((prevCart) => {
  //     const existingProduct = prevCart.find((item) => item.id === product.id);

  //     if (existingProduct) {
  //       return prevCart.map((item) =>
  //         item.id === product.id
  //           ? {
  //               ...item,
  //               quantity: item.quantity + product.quantity,
  //               selectedColors: [
  //                 ...new Set([
  //                   ...item.selectedColors,
  //                   ...product.selectedColors,
  //                 ]),
  //               ],
  //               selectedSizes: [
  //                 ...new Set([...item.selectedSizes, ...product.selectedSizes]),
  //               ],
  //             }
  //           : item
  //       );
  //     } else {
  //       return [...prevCart, product];
  //     }
  //   });
  // };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + product.quantity,
                selectedColors: product.selectedColors,
                selectedSizes: product.selectedSizes,
              }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
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
        handleCloseCategoryFilter,
        addToCart,
        removeFromCart,
        cart,
        setCart,
        updateCartQuantity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
