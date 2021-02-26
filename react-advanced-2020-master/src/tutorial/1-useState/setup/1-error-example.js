import React, { useState } from "react";

const ErrorExample = () => {
  const [title, setTitle] = useState("Random Title");

  const handleClick = () => {
    title === "Random Title"
      ? setTitle("Hello World")
      : setTitle("Random Title");
  };

  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default ErrorExample;
