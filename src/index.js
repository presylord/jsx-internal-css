import React from "react";
import ReactDOM from "react-dom";

const styles = {
  color: "red",
  fontFamily: "Arial"
};

ReactDOM.render(
  <div>
    <h1 style={styles}>Hello World</h1>
    <p> This is a test on JSX inline styles </p>
  </div>,
  document.getElementById("root")
);
