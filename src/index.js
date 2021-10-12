import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW it, OPTIONAL CALLBACK);

// ReactDOM.render(<h1> Hello World </h1>, document.getElementById("root"));
//render method can only accept one HTML tag

ReactDOM.render(
  <div>
    <h1> Hello World </h1>
    <p> Learning to use react </p>
  </div>,
  document.getElementById("root")
);
//babel-javascript compiler
//babel converts es6, es7 js code into compiler level js
