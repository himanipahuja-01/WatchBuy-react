import React from "react";
import axios from "axios";
// import { useEffect } from "react";
import { useState } from "react";

function Register(props) {
  const [formdata, setFormdata] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormdata((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const onRegister = (e) => {
    e.preventDefault();
    console.log(formdata);
    axios.post("http://localhost:5000/user", formdata);
  };

  return (
    <div>
      <div className="conatiner-fluid ms-auto">
        <section className="signin">
          <div className="container">
            <div className="signup-content">
              <form className=" form mt-5" onSubmit={onRegister}>
                <div className="mb-3">
                  <div className="form-group">
                    <label className="form-label">
                      <b>Username</b>
                    </label>
                    <input
                      name="username"
                      type="Username"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <b>Email</b>
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <b> Password</b>
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-dark">
                  SignUp
                </button>

                <div>
                  <label className="form-check-label mt-5">
                    Having Problem in Registering?
                  </label>
                </div>
                <div>
                  <label className="form-check-label">
                    {/* <a className="text-decoration-none" href=""> */}
                    Click here
                    {/* </a> */}
                    for help
                  </label>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Register;
