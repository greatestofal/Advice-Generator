import React, { useEffect, useState } from "react";
import "./App.css";
import image from "./patterndividerdesktop.svg";
import axios from "axios";

function App() {
  const [advice, setAdvise] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    handleClick();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.get("https://api.adviceslip.com/advice");
      setLoading(false);
      const result = response.data.slip;
      setAdvise(() => result);
    } catch (error) {
      setLoading(false);
      setAdvise({ id: "--", advice: "Oops... Something went wrong" });
      console.log(`Error: ${error}`);
    }
  }

  function handleClick() {
    fetchData();
  }

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div>
            <h1># {advice.id}</h1>
            <h1> {loading ? "Loading..." : `"${advice.advice}"`}</h1>
          </div>
          <div className="hrs">
            <img src={image} alt="" />
          </div>
          <div className="button">
            <button onClick={handleClick}></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
