import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "../../constants";
import "./Search.scss";
import { allProducts } from "../../constants";
import SearchResult from "./SearchResult/SearchResult";

const SearchModal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredItems = allProducts
    .filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 5);

  const handleResultClick = (productId) => {
    navigate(`/product/${productId}`);
    setSearchQuery("");
  };

  return (
    <div className="search_modal">
      <div className="search_wrapper">
        <img src={Search} alt="Search icon" />
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {searchQuery && SearchResult({ filteredItems, handleResultClick })}
    </div>
  );
};

export default SearchModal;
