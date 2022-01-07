import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ResultList from './ResultList';

const PaginatedResults = ({ itemsPerPage, result }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(result.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(result.length / itemsPerPage));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, itemsPerPage, result]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % result.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems && currentItems.length > 0 ? (
        <>
          <ResultList result={currentItems} showMore={false} sort={true} />
          {currentItems.length > 3 && (
            <ReactPaginate
              breakLabel='...'
              nextLabel='Next'
              onPageChange={handlePageClick}
              pageRangeDisplayed={4}
              pageCount={pageCount}
              previousLabel='Previous'
              renderOnZeroPageCount={null}
              activeClassName='pageActive'
            />
          )}
        </>
      ) : (
        <h3
          style={{
            textAlign: 'center',
            marginTop: '20px',
            backgroundColor: '#F8D7DA',
            borderColor: '#ffeeba',
            borderRadius: '5px',
            fontSize: '15px',
            padding: '10px',
            textTransform: 'capitalize',
            marginBottom: '25px',
            fontWeight: '400',
            color: '#881C24',
          }}
        >
          There is no result
        </h3>
      )}
    </>
  );
};

export default PaginatedResults;
