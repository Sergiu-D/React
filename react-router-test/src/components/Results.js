import React, { useEffect, useState } from "react";
import { useHistory, useParams, useLocation } from "react-router";

export default function Results() {
  const urlParams = useParams().select;
  const locationState = useLocation();

  const searchParams = new URLSearchParams(urlParams);

  let result = [];

  for (const pair of searchParams.entries()) result.push(pair);

  const getResults = () => {
    const el = result.map((item, index) => (
      <div key={index}>{`You selected ${item[0]}: ${
        !item[1] ? "???" : item[1]
      }`}</div>
    ));
    return el;
  };

  return <div>{getResults()}</div>;
}
