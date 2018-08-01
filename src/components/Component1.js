import React from "react";
import App from "../App";

const component1 = props => {
  return (
    <div>
      <h1 style={{ backgroundColor: "red" }}>{props.var1}</h1>
      <h1 style={{ backgroundColor: "brown" }}>{props.var2}</h1>
      <h1 style={{ backgroundColor: "grey" }}>{props.var3}</h1>
    </div>
  );
};

export default component1;
