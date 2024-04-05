import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./Header";

const App = () => (
  <div className="container">
  <Header />
  Student App 1
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
