import React, { useState, useEffect } from "react";

function Pagination({ setPageNumber, totalUsers, currentPage }) {
  const [displayPage, setDisplayPage] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [leftDisabled, setLeftDisabled] = useState(true);
  const [rightDisabled, setRightDisabled] = useState(false);

  useEffect(() => {
    if (displayPage[0] === 1) setLeftDisabled(true);
    else setLeftDisabled(false);
    if (displayPage[9] === totalUsers / 10) setRightDisabled(true);
    else setRightDisabled(false);
  }, [displayPage]);

  let pageNumbers = [];
  for (let i = 1; i <= totalUsers; i++) {
    pageNumbers.push(i);
  }
  //Go to preveious Page number

  const prevPageNumber = () => {
    const lastPage = displayPage[0] - 1;
    const startPage = lastPage - 10;

    setDisplayPage(pageNumbers.slice(startPage, lastPage));
  };
  const nextPageNumber = () => {
    const lastPage = Math.min(totalUsers, displayPage[9] + 10);
    const startPage = lastPage - 10;

    setDisplayPage(pageNumbers.slice(startPage, lastPage));
  };

  return (
    <nav>
      <ul className="pagination">
        <li
          className="page-item"
          onClick={prevPageNumber}
          style={
            leftDisabled
              ? { pointerEvents: "none", cursor: "pointer" }
              : { cursor: "pointer" }
          }
        >
          <a className="page-link">
            <i className="fas fa-chevron-left"></i>
          </a>
        </li>
        {displayPage.map((number) => {
          return (
            <li
              key={number}
              className="page-item"
              onClick={() => {
                setPageNumber(number);
              }}
            >
              <a
                href="#"
                className="page-link"
                style={
                  currentPage == number ? { backgroundColor: "#ceceff" } : {}
                }
              >
                {number}
              </a>
            </li>
          );
        })}
        <li
          className="page-item"
          onClick={nextPageNumber}
          style={
            rightDisabled
              ? { pointerEvents: "none", cursor: "pointer" }
              : { cursor: "pointer" }
          }
        >
          <a className="page-link">
            <i className="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
