import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { useState } from "react";
import { fetchLoginUser, AddCart, getAddress } from "../Actions/index";
import AddressEdit from "./AddressEdit";

var address = [];

function AddressForm(props) {
  console.log(props.items.Cart);

  const [addressData, setAddressData] = useState({
    id: "",
    contact: "",
    mobile: "",
    pincode: "",
    address: "",
    location: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddressData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(addressData)
  };

  console.log(addressData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    address.push(addressData);
    var response = await axios({
      method: "patch",
      url: "http://localhost:5000/user/1",
      data: {
        addressData: address,
      },
    });
    alert("Address saved");
  };

  let ListCart = [];
  let TotalCart = 0;
  Object.keys(props.items.Cart).forEach(function (item) {
    TotalCart += props.items.Cart[item].quantity * props.items.Cart[item].price;
    ListCart.push(props.items.Cart[item]);
  });

  const [show, setShow] = useState("none");

  const styling = {
    display: show,
    // marginBottom: `${padding}`
  };

  const styled = (id, index) => {
    setShow("flex");
  };

  var date = new Date();
  date.setDate(date.getDate() + 3);

  return (
    <div>
      <div className="container">
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
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
                <form onSubmit={handleSubmit} className="form p-5 shadow">
                  <div className="form-group mt-3">
                    <label className="form-label fw-bold">
                      Contact Details
                    </label>
                    <input
                      name="contact"
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      onChange={handleChange}
                    />
                    <input
                      name="mobile"
                      type="text"
                      placeholder="Mobile no"
                      className="form-control mt-2"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group mt-3">
                    <label className="form-label fw-bold">Address</label>
                    <input
                      name="pincode"
                      type="text"
                      placeholder="Pincode"
                      className="form-control mt-2"
                      onChange={handleChange}
                    />

                    <input
                      name="address"
                      type="text"
                      placeholder="Address(House no, Building street area)"
                      className="form-control mt-2"
                      onChange={handleChange}
                    />

                    <input
                      name="location"
                      type="text"
                      placeholder="Location"
                      className="form-control mt-2"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="buttons mt-3">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <section className="h-custom margin">
          <div className="row g-3 margin">
            <div className="col-lg-7">
              <h5 className="mb-3">
                <Link to="/About" className="text-body">
                  <i className="fas fa-long-arrow-alt-left me-2"></i>Continue
                  shopping
                </Link>
              </h5>
              <hr />

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div
                  type="button"
                  className="btn border button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@getbootstrap"
                >
                  ADD NEW ADDRESS
                </div>
              </div>
              {props.userData[0].addressData.map((item, key) => {
                return (
                  <div
                    className="card mb-3 w-100 heights"
                    onClick={() => {
                      styled(item.id, key);
                    }}
                  >
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div></div>
                          <div className="ms-3">
                            <h5>{item.contact}</h5>
                            <p className="small mb-0">{item.mobile}</p>
                            <h5 className="fw-normal mb-0 p-0 text-wrap">
                              {item.location}, {item.address}, {item.pincode}
                            </h5>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-lg-5 col-md-6 ms-3 mt-3"
                        style={styling}
                      >
                        <button
                          type="button"
                          className="btn border button ms-3 px-2"
                          data-mdb-toggle="tooltip"
                          title="Remove item"
                        >
                          Remove
                        </button>

                        <AddressEdit index={key} item={item} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="col-lg-4 ms-4">
              <div className="card h-auto w-100">
                <h6 className="ms-3 mt-3">DELIVERY ESTIMATES</h6>

                <div className="card-body p-0">
                  {ListCart.map((item, key) => {
                    console.log(item);
                    return (
                      <div key={key}>
                        <div className="d-flex align-items-center border-bottom p-3">
                          <img
                            src={item.image}
                            className="img-fluid d-block rounded-3"
                            style={{ width: "60px" }}
                            alt="Avatar"
                          />

                          <p>
                            Estimated delivery at {date.toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-white">
                  <div className="card-header py-3">
                    <h6 className="mb-0">PRICE DETAILS</h6>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                        <div>
                          <p>MRP</p>
                          <p>
                            <p className="mb-0">(including VAT)</p>
                          </p>
                        </div>
                        <span>
                          <p>{Number(TotalCart).toLocaleString("en-US")}</p>
                        </span>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                        <div>
                          <p>Convenience fee</p>
                        </div>
                        <span>
                          <p>Rs.150</p>
                        </span>
                      </li>
                    </ul>
                    <hr />

                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-1">
                      <div>
                        <strong>Total Amount</strong>
                      </div>
                      <span>
                        <strong>
                          {Number(TotalCart + 150).toLocaleString("en-US")}
                        </strong>
                      </span>
                    </li>

                    <Link
                      type="button"
                      className="btn btn-danger btn-lg btn-block w-100"
                      to="/AddtoCart/addressform"
                    >
                      Continue
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  //  console.log(state)
  return {
    items: state.todoProduct,
    userData: state.userData,
  };
};

export default connect(mapStateToProps, {
  fetchLoginUser,
  AddCart,
  getAddress,
})(AddressForm);
