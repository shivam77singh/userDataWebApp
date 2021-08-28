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
              <Link to="/userDataWebApp/">
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
              First Name: <span style={myStyle}>{currentUser.first_name}</span>
            </li>
            <li class="list-group-item">
              Last Name: <span style={myStyle}>{currentUser.last_name}</span>{" "}
            </li>
            <li class="list-group-item">
              Company Name:{" "}
              <span style={myStyle}>{currentUser.company_name}</span>
            </li>
            <li class="list-group-item">
              City: <span style={myStyle}>{currentUser.city}</span>
            </li>
            <li class="list-group-item">
              State: <span style={myStyle}>{currentUser.state}</span>
            </li>
            <li class="list-group-item">
              Zip: <span style={myStyle}>{currentUser.zip}</span>
            </li>

            <li class="list-group-item">
              Email: <span style={myStyle}>{currentUser.email}</span>{" "}
            </li>
            <li class="list-group-item">
              Web:{" "}
              <span style={myStyle}>
                <a href={currentUser.web} target="_blank">
                  {" "}
                  {currentUser.web}
                </a>
              </span>
            </li>
            <li class="list-group-item">
              Age: <span style={myStyle}> {currentUser.age}</span>
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
