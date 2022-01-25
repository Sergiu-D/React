import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";

// Components
import About from "./components/About";
import Test from "./components/Test";
import Results from "./components/Results";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello App</h1>
      {/* <DialogBox /> */}
      <ToastContainer
        position="top-right"
        autoClose={50000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <nav>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "4rem",
              listStyle: "none",
            }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/about" component={About} />

          <Route exact path="/test" component={Test} />
          <Route path="/about/:select">
            <About />
            <Results />
          </Route>
          <Route path="/test/:next">
            <Test />
            <div>You are next</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
