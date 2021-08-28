import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import User from "./User";
import Pagination from "./Pagination";

function UsersTable({ currentUsers, setPageNumber, totalUsers, currentPage }) {
  const [isSort, setIsSort] = useState({
    id: 1,
    first_name: 0,
    last_name: 0,
    age: 0,
    email: 0,
    web: 0,
  });
  const [inputValue, setInputValue] = useState("");
  const [tempUsers, setTempUsers] = useState([]);

  const handleChange = ({ type }) => {
    let temp = Object.assign({}, isSort);
    if (temp[type] == 0) temp[type] = 1;
    else if (temp[type] == 1) temp[type] = -1;
    else temp[type] = 1;

    for (let obj in temp) {
      if (obj == type) continue;
      else temp[obj] = 0;
    }
    setIsSort(temp);
  };
  const setSortedData = () => {
    const temp = Object.assign([], tempUsers);
    for (let field in isSort) {
      if (isSort[field] == 1) {
        temp.sort((a, b) => {
          if (a[field] < b[field]) return -1;
          else if (a[field] > b[field]) return 1;
          return 0;
        });
      } else if (isSort[field] == -1) {
        temp.sort((a, b) => {
          if (a[field] < b[field]) return 1;
          else if (a[field] > b[field]) return -1;
          return 0;
        });
      }
    }
    setTempUsers(temp);
  };
  useEffect(() => {
    setSortedData();
  }, [isSort, currentUsers]);

  useEffect(() => {
    const temp = currentUsers.filter((user) => {
      return (
        user.first_name.toLowerCase().startsWith(inputValue) ||
        user.last_name.toLowerCase().startsWith(inputValue)
      );
    });
    setTempUsers(temp);
  }, [inputValue, currentUsers]);

  return (
    <div className="container mt-5">
      <h2>Users</h2>
      <div className="input-group" style={{ width: "40%", minWidth: "400px" }}>
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value.trim())}
        />
        <button type="button" className="btn btn-outline-primary">
          search
        </button>
      </div>
      <div className="users">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              {/* <th scope="col">
                #{" "}
                <span onClick={() => handleChange({ type: "id" })}>
                  {isSort.id == 0 ? (
                    <i className="fas fa-sort"></i>
                  ) : isSort.id == 1 ? (
                    <i class="fas fa-sort-up"></i>
                  ) : (
                    <i class="fas fa-sort-down"></i>
                  )}
                </span>
              </th> */}
              <th scope="col">
                First Name{" "}
                <span onClick={() => handleChange({ type: "first_name" })}>
                  {isSort.first_name == 0 ? (
                    <i className="fas fa-sort"></i>
                  ) : isSort.first_name == 1 ? (
                    <i class="fas fa-sort-up"></i>
                  ) : (
                    <i class="fas fa-sort-down"></i>
                  )}
                </span>
              </th>
              <th scope="col">
                Last Name{" "}
                <span onClick={() => handleChange({ type: "last_name" })}>
                  {isSort.last_name == 0 ? (
                    <i className="fas fa-sort"></i>
                  ) : isSort.last_name == 1 ? (
                    <i class="fas fa-sort-up"></i>
                  ) : (
                    <i class="fas fa-sort-down"></i>
                  )}
                </span>
              </th>
              <th scope="col">
                Age{" "}
                <span onClick={() => handleChange({ type: "age" })}>
                  {isSort.age == 0 ? (
                    <i className="fas fa-sort"></i>
                  ) : isSort.age == 1 ? (
                    <i class="fas fa-sort-up"></i>
                  ) : (
                    <i class="fas fa-sort-down"></i>
                  )}
                </span>
              </th>
              <th scope="col">
                Email{" "}
                <span onClick={() => handleChange({ type: "email" })}>
                  {isSort.email == 0 ? (
                    <i className="fas fa-sort"></i>
                  ) : isSort.email == 1 ? (
                    <i class="fas fa-sort-up"></i>
                  ) : (
                    <i class="fas fa-sort-down"></i>
                  )}
                </span>
              </th>
              <th scope="col">
                Web{" "}
                <span onClick={() => handleChange({ type: "web" })}>
                  {isSort.web == 0 ? (
                    <i className="fas fa-sort"></i>
                  ) : isSort.web == 1 ? (
                    <i class="fas fa-sort-up"></i>
                  ) : (
                    <i class="fas fa-sort-down"></i>
                  )}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {tempUsers.map((data) => {
              return <User key={data.id} data={data} />;
            })}
          </tbody>
        </table>
        <Pagination
          setPageNumber={setPageNumber}
          totalUsers={totalUsers}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default UsersTable;