import { Outlet, NavLink } from "react-router-dom";

import React, { Component } from "react";

class AdminLayout extends Component {
  render() {
    return (
      <div>
        <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" activeclassname = "active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname = "active" to="/About">
                  Watches
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname = "active" to="/Admin/Dashboard">
                  Mobiles
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" activeclassname = "active" to="/AddtoCart">
                  AddtoCart
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" activeclassname = "active" to="/Login">
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" activeclassname = "active" to="/CreateUser">
                  Register
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-md-0">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
              />
            </form>
          </div>
        </nav>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 gx-0">
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
            <div className="col-lg-9">
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
