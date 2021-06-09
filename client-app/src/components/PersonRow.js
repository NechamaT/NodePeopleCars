import React from "react";
import { Link } from "react-router-dom";

const PersonRow = ({ person }) => {
  const { firstName, lastName, age, id, carCount } = person;

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{age}</td>
      <td>{carCount}</td>
      <td>
        <Link to={`/addcar/${id}`}>
          <button className="btn btn-danger">Add Car</button>
        </Link>
      </td>
      <td>
        <Link to={`/delete/${id}`}>
          <button className="btn btn-danger">Delete Cars</button>
        </Link>
      </td>
    </tr>
  );
};

export default PersonRow;
