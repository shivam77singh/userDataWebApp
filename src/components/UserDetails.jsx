import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function UserDetails({ currentUsers }) {
  const { userId } = useParams();
  const currentUser = currentUsers.find((user) => user.id == userId);
  const myStyle = { fontWeight: "bold" };
  return (
    <>
      {currentUser ? (
        <div className="container mt-5">
          <ul class="list-group">
            <li class="list-group-item active">
              <Link to="/users">
                <span className="mr-5" style={{ color: "white" }}>
                  <i class="fas fa-arrow-left"></i>
                </span>
              </Link>
              <span>
                {" "}
                Details:{" "}
                <span style={myStyle}>
                  {currentUser.first_name} {currentUser.last_name}
                </span>
              </span>
            </li>
            <li class="list-group-item">
              id: <span style={myStyle}>{currentUser.id}</span>
            </li>
            <li class="list-group-item">
              first_name: <span style={myStyle}>{currentUser.first_name}</span>
            </li>
            <li class="list-group-item">
              last_name: <span style={myStyle}>{currentUser.last_name}</span>{" "}
            </li>
            <li class="list-group-item">
              age: <span style={myStyle}> {currentUser.age}</span>
            </li>
            <li class="list-group-item">
              email: <span style={myStyle}>{currentUser.email}</span>{" "}
            </li>
            <li class="list-group-item">
              web:{" "}
              <span style={myStyle}>
                <a href={currentUser.web} target="_blank">
                  {" "}
                  {currentUser.web}
                </a>
              </span>
            </li>
            <li class="list-group-item">
              company_name:{" "}
              <span style={myStyle}>{currentUser.company_name}</span>
            </li>
            <li class="list-group-item">
              city: <span style={myStyle}>{currentUser.city}</span>
            </li>
            <li class="list-group-item">
              state: <span style={myStyle}>{currentUser.state}</span>
            </li>
            <li class="list-group-item">
              zip: <span style={myStyle}>{currentUser.zip}</span>
            </li>
          </ul>
        </div>
      ) : (
        <h1></h1>
      )}
    </>
  );
}

export default UserDetails;
