const ResultItem = ({ result }) => {
  return (
    <>
      <div className="result">
        <div className="left">
          <h1>
            {result.country} - {result.city}
          </h1>
          <p>
            {result.name} {result.date}
          </p>
        </div>
        <div className="right">
          <h1>
            Email : <span> {result.email}</span>
          </h1>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ResultItem;
