import React, { useState } from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  useState();
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
      <ColorfullMessage color="green">こちらは変更できますか</ColorfullMessage>
      <ColorfullMessage color="red">アイフォン買うぞ</ColorfullMessage>
      <ColorfullMessage color="green" fontSize="1.8em">
        午後九時から始まるぞ
      </ColorfullMessage>
      <ColorfullMessage color="purple">初めまして吹越俊明です</ColorfullMessage>
      <ColorfullMessage>
        何も変化がなくてもここにテキストを書くだけでいいんです
      </ColorfullMessage>
      <button onClick={onCLickButton}>ボタン</button>
    </>
  );
};

export default App;
