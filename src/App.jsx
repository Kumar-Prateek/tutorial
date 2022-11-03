import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: Tutorial App</div>
    <div>Framework: React</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <div>Developer: Prateek</div>
    <div>Deployed on: Jenkins Locally</div>
    <div>Testing deployment Date 03/11/2022</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
