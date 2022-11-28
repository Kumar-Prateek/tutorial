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
    <div>Made change on branch</div>
    <div>Made change on branch dummy</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
