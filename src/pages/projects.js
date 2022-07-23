import React from "react";
// import { Link } from "react-router-dom";
import Image from "../assets/crypt.png";
import Image1 from "../assets/foodapp.jpg";
import Image2 from "../assets/icecreamapp.PNG";
const styles = {
  meltedcone: {
    height: "20rem",
    width: "20rem",
  },
  card: {
    maxWidth: "28rem",
  },
};

export default function projects() {
  return (
    <div>
      <h2>Past Projects</h2>
      <br></br>
      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          <img
            style={styles.icecreamapp}
            src={Image2}
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="card-title"> The Melted Cone </h3>
            <p className="card-text">E-commerce site for selling ice cream. </p>
          </div>
          {/* <a>https://the-melted-cone.herokuapp.com/</a> */}
          <div className="card-body">
            <a className="card-link"> Link to Site </a>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          <img style={styles.foodapp} src={Image1} className="card-img-top" />
          <div className="card-body">
            <h3 className="card-title"> Everything But the Kitchen Sink </h3>
            <p className="card-text">
              Recipe App that uses selected ingredients you have on-hand.
            </p>
          </div>

          <div className="card-body">
            <a className="card-link"> Link to Site </a>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          <img style={styles.crypt} src={Image} className="card-img-top" />
          <div className="card-body">
            <h3 className="card-title"> Crypt Keepers </h3>
            <p className="card-text"> Cryptocurrency Learning Site </p>
          </div>

          <div className="card-body">
            <a className="card-link"> Link to Site </a>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          {/* <img style={styles.scoop} src={Image} className="card-img-top" /> */}
          <div className="card-body">
            <h3 className="card-title"> PROJECT - 1 </h3>
            <p className="card-text">Weather Search App</p>
          </div>

          <div className="card-body">
            <a className="card-link"> Link to Site </a>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          {/* <img style={styles.scoop} src={Image} className="card-img-top" /> */}
          <div className="card-body">
            <h3 className="card-title"> PROJECT - 2 </h3>
            <p className="card-text">Tolkien Quiz</p>
          </div>

          <div className="card-body">
            <a className="card-link"> Link to Site </a>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          {/* <img style={styles.scoop} src={Image} className="card-img-top" /> */}
          <div className="card-body">
            <h3 className="card-title"> PROJECT - 3 </h3>
            <p className="card-text"> Express Note Taker </p>
          </div>

          <div className="card-body">
            <a className="card-link"> Link to Site </a>
          </div>
        </div>
      </div>
    </div>
  );
}
