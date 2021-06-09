import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PersonRow from "../components/PersonRow";

const Home = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    console.log('hello!!!')
    const refreshTable = async () => {
      const { data } = await axios.get("/api/people/");
      console.log(data);
      setPeople(data);
    };
    refreshTable();
  }, []);

  return (
    <>
      <div className="row">
        <Link to={"/addperson"}>
          <button className="btn btn-success">Add Person</button>
        </Link>
      </div>
      <table className="table table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Car Count</th>
            <th>Add Car</th>
            <th>Delete Cars</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <PersonRow key={p.id} person={p} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
