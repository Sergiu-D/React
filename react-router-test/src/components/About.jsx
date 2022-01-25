import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams, useLocation } from "react-router";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const notify = () => {
  toast("Default Notification !");

  toast.success("Success Notification !", {
    position: toast.POSITION.TOP_CENTER,
  });

  toast.error("Error Notification !", {
    position: toast.POSITION.TOP_LEFT,
  });

  toast.warn("Warning Notification !", {
    position: toast.POSITION.BOTTOM_LEFT,
  });

  toast.info("Info Notification !", {
    position: toast.POSITION.BOTTOM_CENTER,
  });

  toast("Custom Style Notification with css class!", {
    position: toast.POSITION.BOTTOM_RIGHT,
    className: "foo-bar",
  });
};

export default function About() {
  const history = useHistory();

  const [all, setAll] = useState({
    numbers: "",
    letters: "",
    colors: "",
  });

  // create function to add two numbers

  // const urlString = `value=${numbers}&letters=${letters}`;
  const url = new URLSearchParams(cleanObject(all));

  useEffect(() => {
    history.push(`/about/${url.toString()}`, { ...all });
  }, [all]);

  function cleanObject(obj) {
    for (let propName in obj) {
      if (
        obj[propName] === "" ||
        obj[propName] === null ||
        obj[propName] === undefined
      ) {
        delete obj[propName];
      }
    }
    return obj;
  }

  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;

    // toast.success(
    //   <p>
    //     <b
    //       style={{
    //         // maxWidth: "50px",
    //         textOverflow: "ellipsis",
    //         overflow: "hidden",
    //         whiteSpace: "nowrap",
    //       }}
    //     >
    //       {value}
    //     </b>{" "}
    //     has been added
    //   </p>,
    //   {
    //     position: "top-right",
    //     // autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   }
    // );

    return setAll((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={3}
      /> */}
      <div>Welcome to About page</div>
      <select name="number" id="number" onChange={handleChange}>
        <option value="">All</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <select name="letter" id="letter" onChange={handleChange}>
        <option value="">All</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
      <select name="color" id="color" onChange={handleChange}>
        <option value="">All</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Yellow">Yellow</option>
        <option value="Greendsanjdfdsfofamlkdgfnk;lndsfnasdnffaefnrjkeranjklr">
          Green
        </option>
      </select>
    </>
  );
}
