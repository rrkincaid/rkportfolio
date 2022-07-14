import React from "react";
// import { Link } from "react-router-dom";

export default function projects() {
  return (
    <div>
      <h2>Past Projects</h2>
      <div className="proj1">
        <h5> Everything But the Kitchen Sink </h5>
        <p> Recipe App that uses selected ingredients you have on-hand </p>
      </div>

      <div className="proj2">
        <h5> Crypt Keepers </h5>
        <p> Cryptocurrency Learning Site</p>
      </div>

      <div className="proj3">
        <h5> COMING SOON: Ain't Life Sweet? </h5>
        <p> E-commerce site for selling ice cream </p>
      </div>

      <div className="classproj">
        <h5> In-Class Projects - 1: Weather App </h5>
        <h5> In-Class Projects - 2: Tolkien Quiz </h5>
        <h5> In-Class Projects - 3: Express Note Taker </h5>
      </div>

      {/* <div className="cardcontainer d-flex flex-wrap justify-content-evenly">
        <div className="card m-5 p-2" style={{ width: "18rem" }}>
          <img src={process.env.PUBLIC_URL + "rkpic.jpg"} alt="proj1">
            {" "}
          </img>
          <div className="card-body">
            <h5 className="card-title"> PROJECT NAME </h5>
            <p className="card-text"></p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
