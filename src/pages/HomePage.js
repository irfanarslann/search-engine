import { useContext, useEffect } from "react";
import { DataContext } from "../context/Data/DataContext";
import ResultList from "../components/ResultList";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import logo from "../img/logo.PNG";
import { calculateResult } from "../utils/CalculateResults";
const HomePage = () => {
  const { setResult, result, keyword, data } = useContext(DataContext);
  let showMore = false,
    sort = false;
  useEffect(() => {
    if (keyword) {
      setResult(calculateResult(data, keyword));
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, data]);

  return (
    <div className="home-main">
      <div className="img-with-text">
        <img src={logo} alt="" className="logo" />
        <p>Search Web App</p>
      </div>
      <div className="main-search-div">
        <SearchBar />
        <Button
          style={{
            marginLeft: "10px",
            backgroundColor: "#204080",
            color: "#fff",
            fontSize: "15px",
            fontWeight: "500",
          }}
          buttonText="Search"
        />
      </div>

      <div className="main-list">
        {result && keyword !== "" && (
          <>
            {(() => {
              if (result.length > 3) {
                showMore = true;
                sort = true;
              }
              return (
                <ResultList result={result} sort={sort} showMore={showMore} />
              );
            })()}
          </>
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

export default HomePage;
