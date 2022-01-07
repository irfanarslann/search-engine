import { useContext, useEffect } from "react";
import { DataContext } from "./context/Data/DataContext";
import Loading from "./components/Loading";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResultPage from "./pages/ResultPage";
const App = () => {
  const { data, loading, error, fetchData } = useContext(DataContext);

  useEffect(() => {
    if (!data) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);
  return (
    <div className="App">
      <Router>
        {loading && <Loading />}
        {data && !loading && (
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        )}
        {error && <h1>{error}</h1>}
      </Router>
    </div>
  );
};

export default App;
