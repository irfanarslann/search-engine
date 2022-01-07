import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/Data/DataContext";
import { calculateResult } from "../utils/CalculateResults";
const SortComponent = () => {
  const { sortData, keyword, data, setResult } = useContext(DataContext);

  const sortFilters = [
    { value: "Name Asc", key: 0 },
    { value: "Name Desc", key: 1 },
    { value: "Year Asc", key: 2 },
    { value: "Year Desc", key: 3 },
  ];

  const clickHandler = (key) => {
    sortData(key);
    setResult(calculateResult(data, keyword));
  };

  return (
    <div className="dropdown">
      <button class="dropbtn">
        Sort <i class="fa fa-sort-alpha-asc" aria-hidden="true"></i>
      </button>
      <div class="dropdown-content">
        {sortFilters.map((filter) => {
          return (
            <Link
              onClick={() => clickHandler(filter.key)}
              to="#"
              key={filter.key}
            >
              {filter.value}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SortComponent;
