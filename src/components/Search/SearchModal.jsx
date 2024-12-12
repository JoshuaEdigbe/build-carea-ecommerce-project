import { useContext, useState } from "react";
import { Search } from "../../constants";
import "./Search.scss";
import { GlobalContext } from "../../context/GlobalContext";
import { allProducts } from "../../constants";

const SearchModal = () => {
  const [search, setSearch] = useState("");
  const { products, setProducts, setFilter } = useContext(GlobalContext);
  
  const handleSearch = () => {
    console.log("searching...");
  };

  const handleSearchInputChange = (e) => {
    setFilter("all");
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);

    const searchedProduct = allProducts.filter(prod => 
        prod.name.toLowerCase().includes(searchValue)
    );
    setProducts(searchedProduct);
  };


  return (
    <div className="search_wrapper">
      <img src={Search} alt="" onClick={handleSearch} />
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={handleSearchInputChange}
      />
    </div>
  );
};

export default SearchModal;
