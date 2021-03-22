import React from "react";
import "./Destination.css";
import map from "../../images/map.png";

const Destination = () => {
  return (
    <div>
      <div className="row ml-5 mt-5">
        <div className="col-md-4 col-sm-12 mt-3">
          <form className="pickForm">
            <h6>Pick From</h6>
            <input className="pick" type="text" name="" id="" />
            <br />
            <h6>Pick To</h6>
            <input className="pick" type="text" name="" id="" />
            <br />
            <button className="btn btn-info searchBtn">Search</button>
          </form>
        </div>
        <div className="col-md-8 col-sm-12 mt-3 ">
          <img src={map} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Destination;
