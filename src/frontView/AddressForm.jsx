import React from "react";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";

function AddressForm(props) {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };

  return (
    <div>
        <div className="container-fluid">

        <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb mt-5">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link to="/AddtoCart">Bag</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>

      <div
        type="button"
        className="btn margin2 border"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@getbootstrap"
      >
        ADD NEW ADDRESS
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                ADD NEW ADDRESS
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Form
                onSubmit={onSubmit}
                subscription={{ submitting: true, pristine: true }}
              >
                {({ handleSubmit, form, submitting, pristine }) => (
                  <form onSubmit={handleSubmit} className="p-5 shadow">
                    <div className="form-group mt-3">
                      <label className="form-label fw-bold">
                        Contact Details
                      </label>
                      <Field
                        name="contact"
                        component="input"
                        type="text"
                        placeholder="Name"
                        className="form-control"
                      />
                      <Field
                        name="mobile"
                        component="input"
                        type="text"
                        placeholder="Mobile no"
                        className="form-control mt-2"
                      />
                    </div>

                    <div className="form-group mt-3">
                      <label className="form-label fw-bold">Address</label>
                      <Field
                        name="pincode"
                        component="input"
                        type="text"
                        placeholder="Pincode"
                        className="form-control mt-2"
                      />

                      <Field
                        name="address"
                        component="input"
                        type="text"
                        placeholder="Address(House no, Building street area)"
                        className="form-control mt-2"
                      />

                      <Field
                        name="location"
                        component="input"
                        type="text"
                        placeholder="Location"
                        className="form-control mt-2"
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
      </div>
    </div>
  );
}

export default AddressForm;
