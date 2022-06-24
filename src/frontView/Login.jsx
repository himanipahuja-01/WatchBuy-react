import React from "react";
// import GoogleAuth from './GoogleAuth';
// import { Form, Field} from 'react-final-form'
import { useState } from "react";
import { fetchLoginUser } from "../Actions/index";
import { connect } from "react-redux";
// import AddtoCart from "./AddtoCart";
// import SingleProduct from './SingleProduct';
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // console.log(name)
    // console.log(value)

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(loginData)
  };

  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    setIsLoggedIn(true);
    
    props.fetchLoginUser(loginData)
    alert("Login successful:)")
    navigate("/About");
  };


  // console.log(props.userData)
  return (
    <div>
      
      <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100 mt-5">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={onSubmit}>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <div className="form-outline mb-4">
          <label className="form-label">
                  <b>Email address</b>
                </label>
            <input name="email" type="email" className="form-control form-control-lg"
              placeholder="Enter a valid email address" onChange={handleChange}/>
            {/* <label className="form-label" for="form3Example3">Email address</label> */}
          </div>

          <div className="form-outline mb-3">
          <label className="form-label">
                  <b>Password</b>
                </label>
            <input name= "password" type="password" className="form-control form-control-lg"
              placeholder="Enter password" onChange={handleChange} />
            {/* <label className="form-label" for="form3Example4">Password</label> */}
          </div>

          <div className="d-flex justify-content-between align-items-center">

            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary btn-lg"
              // style="padding-left: 2.5rem; padding-right: 2.5rem;"
              >Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                className="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

    <div className="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>
    
    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google"></i>
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  
  </div>
</section>


      {/* <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <form onSubmit={onSubmit} className="form mt-5">
              <div className="p-2">
                <label className="m-2 form-label">
                  <b>Email</b>
                </label>
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="email"
                  onChange={handleChange}
                />
              </div> */}

              {/* <div className="p-2">
                <label className="m-2 form-label">
                  <b>Password</b>
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="password"
                  onChange={handleChange}
                />
              </div>
              <div className="buttons p-2">
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
                <button type="button" className="btn btn-dark ms-2">
                  Reset
                </button>
              </div>
            </form>
          
          </div>
        </div>
        {/* <GoogleAuth/>     */}
      {/* </div> */} 
    </div>
  );
}

const mapToStateProps = (state) => {
  return {
    userData: state.userData,
  };
};

export default connect(mapToStateProps, { fetchLoginUser })(Login);
