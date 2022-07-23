import React from "react";
import Image from "../assets/rkpic.jpg";

const styles = {
  // rkpic: {
  //   height: "23rem",
  //   width: "20rem",
  // },
  card: {
    maxWidth: "28rem",
  },
  cardContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    border: "none",
  },
  container: {
    backgroundColor: "grey",
    borderRadius: 2,
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    textAlign: "center",
    // backgroundSize: "30%",
    alignItems: "center",
  },
  img: {
    height: "35rem",
    width: "35rem",
  },
  quote: {
    color: "black",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    textAlign: "center",
  },
  span: {
    color: "black",
  },
  btn: {
    textDecoration: "none",
    color: "black",
  },
  flavorites: {
    marginTop: 45,
    color: "black",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    textAlign: "center",
  },
};

export default function home() {
  return (
    <div>
      <div className="row p-5 justify-content-around" style={styles.container}>
        <div style={styles.cardContainer}>
          <br></br>
          <h3 style={styles.flavorites}>BIO </h3>
          <br></br>
          <h3 style={styles.quote}>
            Hi! My name is Rachel and I am a web developer located in Colorado.{" "}
          </h3>
          <h3 style={styles.quote}>
            <h3 style={styles.quote}>
              {" "}
              I began coding fairly recently but thanks to DU Coding Bootcamp
              and their amazing staff and my fellow students, I can now count
              myself as a full stack web developer.
              <h3 style={styles.quote}>
                Please explore this page to see the projects I have been working
                on recently and to learn a little more about me.
                <br></br>
                <h3 style={styles.quote}>
                  Follow the links above to navigate through the page. Pretty
                  exciting stuff here!
                </h3>
                <br></br>
              </h3>
            </h3>
          </h3>
        </div>
      </div>

      <div>
        {/* <h2> Bio </h2>

        <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
          <div style={styles.card} className="card align-items-center">
            <img style={styles.rkpic} src={Image} className="card-img-top" />
            <div className="card-body"></div>
          </div>
        </div>
        <h3>
          Hi! My name is Rachel and I am a web developer located in Colorado. I
          began coding fairly recently but thanks to DU Coding Bootcamp and
          their amazing staff and my fellow students, I can now count myself as
          a full stack web developer. Please explore this page to see the
          projects I have been working on recently and to learn a little more
          about me. Follow the links above to navigate through the page. Pretty
          exciting stuff here!
        </h3> */}
      </div>
    </div>
  );
}
