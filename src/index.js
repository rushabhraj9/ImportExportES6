import React from "react";
import ReactDOM from "react-dom";
import * as calc from "./calculator.js";

ReactDOM.render(
  <ul>
    <li>{calc.add(2, 3)}</li>
    <li>{calc.sub(5, 3)}</li>
    <li>{calc.mult(2, 3)}</li>
    <li>{calc.div(3, 6)}</li>
  </ul>,
  document.getElementById("root")
);
