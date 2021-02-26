import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const [complexValue, setComplexValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      // setComplexValue(complexValue + 1);
      setComplexValue((prevValue) => prevValue + 1);
      console.log("Increased");
    }, 2000);
    console.log("Increasing");
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{complexValue}</h1>
        <button className="btn" onClick={() => complexIncrease()}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
