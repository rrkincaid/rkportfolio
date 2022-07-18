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
};

export default function home() {
  return (
    <div>
      <h2> Bio </h2>

      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div style={styles.card} className="card align-items-center">
          <img style={styles.rkpic} src={Image} className="card-img-top" />
          <div className="card-body"></div>
        </div>
      </div>
      <h3>
        Hi! My name is Rachel and I am a web developer located in Colorado. I
        began coding fairly recently but thanks to DU Coding Bootcamp and their
        amazing staff and my fellow students, I can now count myself as a full
        stack web developer. Please explore this page to see the projects I have
        been working on recently and to learn a little more about me. Follow the
        links above to navigate through the page. Pretty exciting stuff here!
      </h3>
    </div>
  );
}
