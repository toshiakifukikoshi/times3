import React from "react";

const ColofulMessage = (props) => {
  const { color, fontSize, children } = props;
  const ccc = {
    color,
    border: "3px solid #ddd",
    fontSize
  };

  return <p style={ccc}>{children}</p>;
};

export default ColofulMessage;
