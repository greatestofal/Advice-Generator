import React, { useEffect, useState } from "react";
import "./App.css";
import image from "./patterndividerdesktop.svg";
import axios from "axios";

function App() {
  const [advice, setAdvise] = useState("");

  useEffect(function () {
    handleClick();
  }, []);

  function handleClick() {
    async function fetchData() {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const result = response.data.slip;
      setAdvise(() => result);
    }
    fetchData();
  }

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div>
            <h1># {advice.id}</h1>
            <h1> " {advice.advice} "</h1>
          </div>
          <div className="hrs">
            <img src={image} alt="" />
          </div>
          <div className="button">
            <button onClick={handleClick}></button>
          </div>
        </div>
      </div>
      Hello Check
    </>
  );
}

export default App;
