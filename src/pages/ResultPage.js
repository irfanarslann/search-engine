import { useContext, useEffect } from "react";
import { DataContext } from "../context/Data/DataContext";
import SearchBar from "../components/SearchBar";
import logo from "../img/logo.PNG";
import Button from "../components/Button";
import PaginatedResults from "../components/PaginatedResults";
import { calculateResult } from "../utils/CalculateResults";
const ResultPage = () => {
  const { setResult, result, keyword, data } = useContext(DataContext);

  useEffect(() => {
    if (keyword) {
      setResult(calculateResult(data, keyword));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, data]);
  return (
    <div className="result-main">
      <div className="top-section">
        <img src={logo} alt="" className="result-page-logo" />
        <SearchBar />
        <Button
          style={{
            backgroundColor: "#4f75c2",
            color: "#fff",
            fontSize: "15px",
            fontWeight: "500",
          }}
          buttonText="Search"
        />
      </div>
      <div className="bottom-section">
        {result && keyword !== "" && (
          <PaginatedResults itemsPerPage={5} result={result} />
        )}
        {keyword === "" && (
          <h3
            style={{
              textAlign: "center",
              marginTop: "20px",
              backgroundColor: "#FFF3CD",
              borderColor: "#ffeeba",
              borderRadius: "5px",
              fontSize: "15px",
              padding: "10px",
              textTransform: "capitalize",
              marginBottom: "25px",
              fontWeight: "400",
              color: "#A56404",
            }}
          >
            Enter search keyword above!
          </h3>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
