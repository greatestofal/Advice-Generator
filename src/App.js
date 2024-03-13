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

  // function handleClick() {
  //   fetchData();
  // }
  // useEffect(function () {
  //   // get advice on component mount
  //   async function fetchData() {
  //     const response = await axios.get("https://api.adviceslip.com/advice");
  //     setAdvise(response.data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
      {/* <section>
        <h2># {advice.id}</h2>
        <h3>"{advice.advice}"</h3>
        <button onClick={handleClick}> Generate Advise </button>
      </section> */}

      <div className="wrapper">
        <div className="container">
          <div>
            <h1># {advice.id}</h1>
            <h1> {advice.advice}</h1>
          </div>
          <div>
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
