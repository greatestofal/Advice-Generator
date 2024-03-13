import React, { useEffect, useState } from "react";

function Class() {
  const [count, setCount] = useState(0);
  const [calculate, setCalculate] = useState(0);

  function handleCalculate() {
    setCount((c) => c + 1);
  }
  useEffect(
    function () {
      setCalculate(count * 2);
    },
    [count]
  );
  return (
    <div className="container">
      <h1> My count is {count}</h1>
      <button onClick={handleCalculate}> Calculate </button>
      <h1> My calculate: {calculate}</h1>
    </div>
  );
  // useEffect(function () {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000);
  // }, []);
  // return (
  //   <div>
  //     <h1> My count is {count} </h1>
  //     <h1> My calculate: {calculate}</h1>
  //     <button type="button"> Calculate </button>
  //   </div>
  // );
}

export default Class;
