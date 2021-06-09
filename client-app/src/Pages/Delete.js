import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import CarRow from "../components/CarRow";

const Delete = () => {
  const [cars, setCars] = useState([]);
  const { personId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const getCar = async () => {
      const { data } = await axios.get(`/api/cars/getforpersonid?personId=${personId}`);
      setCars(data);
    };

    getCar();
  }, []);

  const onConfirm = async () => {
    await axios.post("/api/cars/delete", { personId });
    history.push("/");
  };

  return (
    <>
      <div className="row mt-5">
        <table className="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((c) => (
              <CarRow key={c.id} car={c} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3>Are you sure you want to delete all the cars?</h3>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-primary btn-block"
            onClick={() => {
              history.push("/");
            }}
          >
            No
          </button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-danger btn-block" onClick={onConfirm}>
            Yes
          </button>
        </div>
      </div>
    </>
  );
};

export default Delete;
