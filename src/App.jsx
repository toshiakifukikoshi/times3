import React, { useState } from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const countUp = () => {
    setNum(num + 1);
  };

  const ttt = () => {
    setFaceShowFlag(!faceShowFlag);
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

  if (num % 3 === 0) {
    faceShowFlag || setFaceShowFlag(true);
  } else {
    faceShowFlag && setFaceShowFlag(false);
  }

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
      <ColorfullMessage color="pink">吹越礼子</ColorfullMessage>
      <button onClick={countUp}>ボタン</button>
      <br />
      <button onClick={ttt}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^^)/</p>}
    </>
  );
};

export default App;
