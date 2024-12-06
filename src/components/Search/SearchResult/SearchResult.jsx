import "./styles.scss";

const SearchResult = ({ filteredItems, handleResultClick }) => {
  return (
    <div className="search_results">
      <ul>
        {filteredItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleResultClick(item.id)}
            className="search_result_item"
          >
            {item.name}
          </li>
        ))}
        {filteredItems.length === 0 && <li>No results found</li>}
      </ul>
    </div>
  );
};

export default SearchResult;
