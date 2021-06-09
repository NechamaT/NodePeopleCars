import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";


const AddCar = () => {
  const [car, setCar] = useState({ make: '', model: '', year: '' });
  const [person, setPerson] = useState({ firstName: '', lastName: '', age:''});
  const history = useHistory();
  const { personId } = useParams();

  useEffect(() => {
    const getPersonById = async () => {
      const { data } = await axios.get(`api/people/getById?id=${personId}`);
      setPerson(data);
    };
    getPersonById();
  }, []);

  
  const onTextChange = e => {
    const copy = { ...car };
    copy[e.target.name] = e.target.value;
    setCar(copy);
}

  const onSubmitClick = async () => {
    await axios.post("/api/cars/addcar", car);
    history.push("/");
  };

  const {make, model, year} = car;
  const {firstName, lastName, age} = person;

  return (
    <div
      style={{ height: "70vh" }}
      className="row justify-content-center align-items-center"
    >
      <div className="col-md-6 jumbotron">
        <div className="row">
          <div className="col-md-6 offset-md-3 card card-body bg-light">
            {firstName && (
              <h2>
                Add a car for {firstName} {lastName}
              </h2>
            )}
            <input
              type="text"
              className="form-control"
              name="make"
              value={make}
              onChange={onTextChange}
              placeholder="Make"
            />
            <br />
            <input
              type="text"
              className="form-control"
              name="model"
              value={model}
              onChange={onTextChange}
              placeholder="Model"
            />
            <br />
            <input
              type="text"
              className="form-control"
              name="year"
              value={year}
              onChange={onTextChange}
              placeholder="Year"
            />
            <br />
            <button
              className="btn btn-primary btn-lg btn-block"
              onClick={onSubmitClick}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
