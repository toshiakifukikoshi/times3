import React from "react";

const App = () => {
  const onCLickButton = () => {
    alert();
  };

  const aaa = {
    color: "red",
    fontSize: "2.8em",
    background: "linear-gradient(transparent 60%, #ff6 60%)"
  };
  const bbb = {
    color: "blue",
    border: "1px solid #aaa",
    textDecoration: "line-through"
  };

  return (
    <>
      <h1 style={aaa}>こんばんは</h1>
      <p style={bbb}>吹越俊明</p>
      <button onClick={onCLickButton}>ボタン</button>
    </>
  );
};

export default App;
