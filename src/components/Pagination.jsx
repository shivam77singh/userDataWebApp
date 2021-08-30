import React, { useState, useEffect } from "react";
let indexOfFirstPage = 1;
let indexOfLastPage;

function Pagination({ setPageNumber, totalUsers, currentPage }) {
  const [displayPage, setDisplayPage] = useState([]);
  const [leftDisabled, setLeftDisabled] = useState(true); //left arrow to disabled or not in the pagination bar
  const [rightDisabled, setRightDisabled] = useState(false); //right arrow to disabled or not n the pagination bar
  const totalPage = Math.ceil(totalUsers / 10);

  const handleDisplayPagination = () => {
    let temp = [];
    for (let i = indexOfFirstPage; i <= indexOfLastPage; i++) {
      temp.push(i);
    }
    if (indexOfFirstPage == 1) setLeftDisabled(true);
    else setLeftDisabled(false);
    if (indexOfLastPage == totalPage) setRightDisabled(true);
    else setRightDisabled(false);
    setDisplayPage(temp);
  };

  //SET THE INITIAL VALUES
  useEffect(() => {
    indexOfLastPage = Math.min(10, totalPage);
    indexOfFirstPage = 1;
    handleDisplayPagination();
  }, [totalUsers]);

  //Go to preveious Page number range
  const prevPageNumber = () => {
    indexOfLastPage = indexOfFirstPage - 1;
    indexOfFirstPage = Math.max(1, indexOfLastPage - 9);

    handleDisplayPagination();
  };
  //Go to next Page number range
  const nextPageNumber = () => {
    indexOfFirstPage = indexOfLastPage + 1;
    indexOfLastPage = Math.min(totalPage, indexOfFirstPage + 9);

    handleDisplayPagination();
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
