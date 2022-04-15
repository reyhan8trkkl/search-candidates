import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Candidates from "./Candidates";
import "react-slideshow-image/dist/styles.css";
import Detail from "../components/Detail";
import AboutUs from "./AboutUs";
import slideShow from "../slideShow";

function Home() {
  return (
    <div>
      <Router>
        <div>
          <div className="header">
            <div className="logo">
              <img
                src="https://cdn-icons-png.flaticon.com/128/7141/7141760.png"
                alt="logo"
              ></img>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/candidates">Candidates</Link>
                </li>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>{slideShow()}</div>
          <Switch>
            <Route path="/candidates">
              <Candidates />
            </Route>
            <Route path="/details">
              <Detail />
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default Home;
