import { Search } from "../../constants";
import "./Search.scss";

const SearchModal = () => {
  const handleSearch = () => {
    console.log("searching...");
  };
  return (
    <div className="search_wrapper">
      <img src={Search} alt="" onClick={handleSearch} />
      <input type="text" placeholder="Search products" />
    </div>
  );
};

export default SearchModal;
