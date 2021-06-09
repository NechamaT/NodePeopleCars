import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddPerson = () => {
  const [person, setPerson] = "";
  const history = useHistory();

  const onTextChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  }


const onAddClick = async () => {
  await axios.post("/api/people/addperson", person);
  history.push("/");
};
const {firstName, lastName, age, id} = person
return(
    <div className="row">
    <div className="col-md-6 offset-md-3">
        <div className="jumbotron">
            <h2>Add a new person</h2>
            <input type="text" className="form-control" placeholder="First Name" onChange={onTextChange} value={firstName} name="firstName" />
            <br />
            <input type="text" className="form-control" placeholder="last Name" onChange={onTextChange} value={lastName} name="lastName" />
            <br />
            <input type="text" className="form-control" placeholder="Age" onChange={onTextChange} value={age} name="age" />
            <br />
            <button className="btn btn-success btn-block" onClick={onAddClick} > Add</button>
        </div>
    </div>
    </div>
)
}
export default AddPerson;
