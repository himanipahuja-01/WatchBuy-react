import { Outlet, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class AdminLayout extends Component {
  render() {
    return (
      <div>
        <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">
          {/* <img src="images/vv.png" className="image img ms-2"/> */}
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

        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-lg-3 gx-0 position-fixed">
            <div
              className="flex-column flex-shrink-0 p-3 text-white bg-dark"
              style={{ height: 'calc(150vh - 56px)' }}
            >
              <NavLink
                to="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" activeclassname = "active"
              >
                <svg className="bi me-2" width="40" height="32"></svg>
                <span className="fs-4">Sidebar</span>
              </NavLink>
              <hr />
              <ul className="nav nav-pills flex-column mb-auto">
               

                <li className="nav-item">
                  <NavLink
                    to="/admin/Dashboard"
                    className="nav-link text-white"
                    aria-current="page" activeclassname = "active"
                  >
                    <svg className="bi me-2" width="16" height="16"></svg>
                    <p className="change">Dashboard</p>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/admin/orders"
                    className="nav-link text-white"
                    aria-current="page" activeclassname = "active"
                  >
                    <svg className="bi me-2" width="16" height="16"></svg>
                    <p className="change">Orders</p>
                  </NavLink>
                </li>


                <li className="nav-item">
                  <NavLink
                    to="/admin/Products"
                    className="nav-link text-white"
                    aria-current="page" activeclassname = "active"
                  >
                    <svg className="bi me-2" width="16" height="16"></svg>
                    <p className="change">Products</p>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/admin/user"
                    className="nav-link text-white"
                    aria-current="page" activeclassname = "active"
                  >
                    <svg className="bi me-2" width="16" height="16"></svg>
                    <p className="change">Customers</p>
                  </NavLink>

                  <li className="nav-item">
                  <NavLink
                    to="/admin/offer"
                    className="nav-link text-white"
                    aria-current="page" activeclassname = "active"
                  >
                    <svg className="bi me-2" width="16" height="16"></svg>
                    <p className="change">Offers</p>
                  </NavLink>
                </li>


                <li className="nav-item">
                  <NavLink
                    to="/admin/addcategory"
                    className="nav-link text-white"
                    aria-current="page" activeclassname = "active"
                  >
                    <svg className="bi me-2" width="16" height="16"></svg>
                    <p className="change">Category</p>
                  </NavLink>
                </li>

                </li>
              </ul>
            </div>
           

            </div>
            <div className="col-lg-12 widthset">
              <div>
            <Outlet />
            </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default AdminLayout;
