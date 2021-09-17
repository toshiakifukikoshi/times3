import React from "react";

const ColofulMessage = (props) => {
  const { color, fontSize, children } = props;
  const ccc = {
    color,
    fontSize
  };

  return <p style={ccc}>{children}</p>;
};

export default ColofulMessage;
