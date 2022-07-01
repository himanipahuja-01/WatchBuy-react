import React from 'react';
import { Form, Field } from "react-final-form";

function AddCoupons(props) {

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const onSubmit = async (values) => {
      await sleep(300);
      window.alert(JSON.stringify(values, 0, 2));
    };

    return (
        <div>
            
            <div className="container-fluid">
          <div className="row m-3">
            <div className="col-lg-3"></div>
            <div className="col-lg-9">
              <Form
                onSubmit={onSubmit}
                subscription={{ submitting: true, pristine: true }}
              >
                {({ handleSubmit, form, submitting, pristine }) => (
                  <form onSubmit={handleSubmit} className="p-5 shadow">
                 

                    <div className="form-group mt-3">
                      <label className="form-label fw-bold">Coupon Code</label>
                      <Field
                        name="couponName"
                        component="input"
                        type="text"
                        placeholder="coupon name"
                        className="form-control"
                      />
                    </div>


                    <div className="form-group mt-3">
                      <label className="form-label fw-bold">Savings</label>
                      <Field
                        name="save"
                        component="input"
                        type="number"
                        placeholder="number"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group mt-3">
                      <label className="form-label fw-bold">
                        Off Percentage
                      </label>
                      <Field
                        name="price"
                        component="input"
                        type="number"
                        placeholder="number"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group mt-3">
                      <label className="form-label fw-bold">
                        Schedule- Start Date
                      </label>

                      <Field
                        name="date"
                        component="input"
                        type="date"
                        placeholder="date"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group mt-3">
                      <label className="form-label fw-bold">
                        Schedule- End Date
                      </label>

                      <Field
                        name="date"
                        component="input"
                        type="date"
                        placeholder="date"
                        className="form-control"
                      />
                    </div>

                    <div className="buttons mt-3">
                      <button
                        type="submit"
                        disabled={submitting || pristine}
                        className="btn btn-primary"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={form.reset}
                        disabled={submitting || pristine}
                        className="btn btn-primary mx-4"
                      >
                        Reset
                      </button>
                    </div>
                  </form>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>

    );
}

export default AddCoupons;