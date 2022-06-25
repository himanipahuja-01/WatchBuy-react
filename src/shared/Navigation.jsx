import React from "react";
import { Link } from "react-router-dom";
// import Layout from "../frontView/Layout";

function Navigation(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">
          <img src="images/vv.png" className="image img ms-2"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <Link className="nav-link" to = "/">
               Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to ="/About">
                Watches
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to ="/Admin/Dashboard">
                Mobiles
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to ="/AddtoCart">
                AddtoCart
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to ="/Login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to ="/CreateUser">
                Register
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link to="/Search">
            <input className="form-control me-2" type="text" placeholder="Search"  />
            </Link>
            {/* <button class="btn btn-outline-success me-2" type="submit">Search</button> */}
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
