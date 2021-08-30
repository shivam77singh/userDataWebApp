import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import UsersTable from "./components/UsersTable";
import UserDetails from "./components/UserDetails";
import "../src/style/app.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [searchedInputValue, setSearchedInputValue] = useState("");
  const usersPerPage = 10;

  //<<<=========================================FETCHES DATA FROM THA API===================================>>>
  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      axios
        .get(
          "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
        )
        .then((res) => {
          setUsersData(res.data);
          setIsLoading(false);
          setSearchedUsers(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchUserData();
  }, []);
  //<<<=========================================FETCHES DATA FROM THA API===================================>>>

  //Get current Users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = searchedUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalUsers = searchedUsers.length;

  //setPageNumber
  const setPageNumber = (number) => {
    setCurrentPage(number);
  };

  //<<<=========================================HANDLES SEARCHED USERS DATA===================================>>>

  //handle input change
  const handleInputChange = (val) => {
    setSearchedInputValue(val);
  };
  useEffect(() => {
    setSearchedUsers(
      usersData.filter((user) => {
        return (
          user.first_name.toLowerCase().startsWith(searchedInputValue) ||
          user.last_name.toLowerCase().startsWith(searchedInputValue)
        );
      })
    );
    if (searchedInputValue) setCurrentPage(1);
  }, [searchedInputValue]);
  //<<<=========================================HANDLES SEARCHED USERS DATA===================================>>>

  return (
    <Router>
      {isLoading ? (
        <h3 className="text-center">Loading...</h3>
      ) : (
        <Switch>
          <Route path="/userDataWebApp/" exact>
            <UsersTable
              currentUsers={currentUsers}
              setPageNumber={setPageNumber}
              totalUsers={totalUsers}
              currentPage={currentPage}
              handleInputChange={handleInputChange}
            />
          </Route>
          <Route path="/userDataWebApp/:userId">
            <UserDetails usersData={usersData} />
          </Route>
        </Switch>
      )}
    </Router>
  );
}

export default App;
