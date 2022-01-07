import { useContext } from "react";
import { DataContext } from "../context/Data/DataContext";

const SearchBar = () => {
  const { setKeyword, keyword } = useContext(DataContext);
  return (
    <input
      className="search-bar"
      type="text"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      placeholder="Search"
    />
  );
};

export default SearchBar;
