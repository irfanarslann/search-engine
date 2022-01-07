import { Link } from "react-router-dom";
import ResultItem from "./ResultItem";
import SortComponent from "./SortComponent";

const ResultList = ({ result, showMore, sort }) => {
  return (
    <div className={`result-list ${result.length > 0 && "active"}`}>
      {showMore !== false ? (
        <>
          {result.slice(0, 3).map((item) => (
            <ResultItem result={item} />
          ))}
          <p className="show-more-button">
            <Link to="/result">Show More</Link>
          </p>
        </>
      ) : (
        <>
          {sort && <SortComponent />}
          {result.map((item) => (
            <ResultItem result={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default ResultList;
