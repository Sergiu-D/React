import React from "react";
import { useHistory, useParams, useLocation } from "react-router";

export default function Test() {
  const history = useHistory();
  const params = useParams();
  const location = history.location.pathname;
  console.log("🚀 ~ file: Test.jsx ~ line 7 ~ Test ~ params", params);
  console.log("🚀 ~ file: Test.jsx ~ line 6 ~ Test ~ history", history);

  const handleClick = () => {
    history.push(`${location}/next`);
  };

  return (
    <>
      <div>Welcome to Test page</div>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}
