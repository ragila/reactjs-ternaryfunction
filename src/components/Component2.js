import React from "react";
import App from "../App";

const component2 = props => {
  return (
    <div>
      <h1>{props.file1}</h1>
      <h1>{props.file2}</h1>
      <h1>{props.file3}</h1>
    </div>
  );
};

export default component2;
