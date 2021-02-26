import React, { useState } from "react";

const UseStateObject = () => {
  const personOne = {
    name: "peter",
    age: 24,
    message: "random message",
  };

  const personTwo = {
    name: "ion",
    age: 90,
    message: "AUR cel mai tare",
  };

  const [person, setPerson] = useState({ ...personOne });

  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button className="btn" onClick={() => setPerson({ ...personOne })}>
        previous person
      </button>
      <button className="btn" onClick={() => setPerson({ ...personTwo })}>
        next person
      </button>
    </>
  );
};

export default UseStateObject;
