import React from "react";
import { Link } from "react-router-dom";
//just rendering the user on the userTable component

function User({ data }) {
  const { first_name, last_name, age, web, email, id } = data;
  return (
    <tr style={{ cursor: "pointer" }}>
      <td>
        <Link to={`/userDataWebApp/${id}`}>{first_name}</Link>
      </td>

      <td>{last_name}</td>
      <td>{age}</td>
      <td>{email}</td>
      <td>
        <a target="_blank" href={web}>
          {web}
        </a>
      </td>
    </tr>
  );
}

export default User;
