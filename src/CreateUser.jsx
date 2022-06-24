import axios from "axios";
import React from "react";
import { Form, Field, FormSpy } from "react-final-form";
import { connect } from "react-redux";
import { getFormState, updateFormState } from "./Actions/index";
// import FormStateToRedux from './FormStateToRedux'
// import FormStateFromRedux from './FormStateFromRedux'

function CreateUser(props) {
  const onSubmit = async (values) => {
    axios.post("http://localhost:5000/user", values);
    alert("Done");
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 mt-5 mb-5">
            <img src="images/draw2.svg" className="w-75 mt-5 ms-5 regicard" />
          </div>
          <div className="col-lg-6 mt-5 mb-3">
            <div className="card regi border-0 shadow w-75 px-5 py-3 d-flex justify-content-center h-auto">
              <Form
                onSubmit={onSubmit}
                subscription={{ submitting: true, pristine: true }}
              >
                {({ handleSubmit, form, submitting, pristine }) => (
                  <form onSubmit={handleSubmit} className="form mt-5">
                    <h3 className="">Register/Signup</h3>
                    {/* <FormStateToRedux form="example" /> */}
                    <FormSpy
                      onChange={(state) => updateFormState(form, state)}
                    />
                    <div className="p-2">
                      <label className="m-2 form-label">
                        <b>Username</b>
                      </label>
                      <Field
                        name="username"
                        component="input"
                        type="text"
                        className="form-control"
                        placeholder="UserName"
                      />
                    </div>
                    <div className="p-2">
                      <label className="m-2 form-label">
                        <b>Email</b>
                      </label>
                      <Field
                        name="email"
                        component="input"
                        type="email"
                        className="form-control"
                        placeholder="email"
                      />
                    </div>
                    <div className="p-2">
                      <label className="m-2 form-label">
                        <b>Password</b>
                      </label>
                      <Field
                        name="password"
                        component="input"
                        type="password"
                        className="form-control"
                        placeholder="password"
                      />
                    </div>

                    <span className="text-nowrap p-2 text-secondary">
                      By continuing, I agree to the
                      <span className="text-danger ms-1">
                        Terms of Use & Privacy Policy
                      </span>
                    </span>

                    <div className="buttons p-2 mt-3">
                      <button
                        type="submit"
                        disabled={submitting || pristine}
                        className="btn btn-dark"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={form.reset}
                        disabled={submitting || pristine}
                        className="btn btn-dark ms-2"
                      >
                        Reset
                      </button>
                    </div>

                    {/* <FormStateFromRedux form="example" /> */}
                  </form>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownprops) => {
  state: getFormState(state, ownprops.form);
};

export default connect(mapStateToProps, { updateFormState })(CreateUser);
