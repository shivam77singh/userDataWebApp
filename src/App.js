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
  const usersPerPage = 10;

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true); //intital loading of data
      axios
        .get(
          "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
        )
        .then((res) => {
          setUsersData(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    };
    fetchUserData(); //funcion to fetch data from api
  }, []);

  //Get current Users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersData.slice(indexOfFirstUser, indexOfLastUser);
  const totalUsers = usersData.length;

  //setPageNumber
  const setPageNumber = (number) => {
    setCurrentPage(number);
  };

  return (
    <Router>
      {isLoading ? (
        <h3 className="text-center">Loading...</h3>
      ) : (
        <Switch>
          <Route path="/userDataWebApp" exact>
            <UsersTable
              currentUsers={currentUsers}
              setPageNumber={setPageNumber}
              totalUsers={totalUsers}
              currentPage={currentPage}
            />
          </Route>
          <Route path="/userDataWebApp/:userId">
            <UserDetails currentUsers={currentUsers} />
          </Route>
        </Switch>
      )}
    </Router>
  );
}

export default App;
