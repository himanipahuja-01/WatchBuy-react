import React from "react";
// import GoogleAuth from './GoogleAuth';
// import { Form, Field} from 'react-final-form'
import { useState } from "react";
import { fetchLoginUser } from "../Actions/index";
import { connect } from "react-redux";
// import AddtoCart from "./AddtoCart";
// import SingleProduct from './SingleProduct';
// import { useNavigate } from "react-router-dom";

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
  };

  // let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    setIsLoggedIn(true);
    // navigate("/About");
    props.fetchLoginUser(loginData)
  };


  // console.log(props.userData)
  return (
    <div>
      <div className="container">
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
              </div>

              <div className="p-2">
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
      </div>
    </div>
  );
}

const mapToStateProps = (state) => {
  return {
    userData: state.userData,
  };
};

export default connect(mapToStateProps, { fetchLoginUser })(Login);
