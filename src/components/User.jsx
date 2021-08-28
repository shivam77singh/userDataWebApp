import React from "react";
import { Link } from "react-router-dom";

function User({ data }) {
  const { first_name, last_name, age, web, email, id } = data;
  return (
    <tr style={{ cursor: "pointer" }}>
      <th scope="row">{id}</th>

      <td>
        <Link to={`/userDataWebApp/users/${id}`}>{first_name}</Link>
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
