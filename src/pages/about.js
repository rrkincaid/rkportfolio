import React from "react";
import { Link } from "react-router-dom";

export default function about() {
  return (
    <div>
      <h2>About Me</h2>
      <h5>
        Colorado native with an eye for design and a passion for travel,
        photography, and hiking the amazing Rocky Mountains with my dog.
      </h5>
      <hr></hr>
      <h4>Languages:</h4>
      <p> English, HTML, CSS, JavaScript, JQuery, JSX, React, SQL,</p>
      <h4>Libraries: </h4>
      <p>
        React, Sequelize, Materialize, Bootstrap, MondoDB, Mongoose, Handlebars,
        inquirer, PWAs, APIs, Apollo, Graph QL, etc.
      </p>
      <h4>Education:</h4>
      <p>
        University of Colorado @ Boulder - BA in History & DU Coding Bootcamp
        (current)
      </p>
    </div>
  );
}
