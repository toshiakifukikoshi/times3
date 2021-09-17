import React from "react";
import ColorfullMessage from "./components/ColorfullMessage";

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
      <ColorfullMessage color="green" message="こちらは変更できますか" />
      <ColorfullMessage color="red" message="アイフォン買うぞ"　font-size="1.3em">
      <button onClick={onCLickButton}>ボタン</button>
    </>
  );
};

export default App;
