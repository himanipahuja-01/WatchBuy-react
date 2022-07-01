import React from "react";
// import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { useState } from "react";
import { fetchLoginUser, AddCart, getAddress } from "../Actions/index";
import AddressEdit from "./AddressEdit";
// import { FiEdit } from 'react-icons/fi';
// import { useEffect } from "react";

var address = [];

function AddressForm(props) {
  console.log(props.items.Cart);
  //   console.log(props.userData[0].id);

  const [addressData, setAddressData] = useState({
    id: "",
    contact: "",
    mobile: "",
    pincode: "",
    address: "",
    location: "",
  });
  const[editData, setEditData] = useState()

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // console.log(name)
    // console.log(value)

    setAddressData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(addressData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(addressData);
    address.push(addressData);
    // console.log(address);
    var response = await axios({
      method: "patch",
      url: "http://localhost:5000/user/1",
      data: {
        addressData: address,
      },
    });
    //   props.AddCart(props.productDetails);
    alert("Address saved");
  };

  //   console.log(props.userData[0].addressData);

  let ListCart = [];
  let TotalCart = 0;
  Object.keys(props.items.Cart).forEach(function (item) {
    TotalCart += props.items.Cart[item].quantity * props.items.Cart[item].price;
    ListCart.push(props.items.Cart[item]);
  });

  const [show, setShow] = useState("hidden");
  // const [padding, setpadding] = useState('0px');

  const styling = {
    visibility: `${show}`,
    // marginBottom: `${padding}`
  };

  const styled = () => {
    setShow("visible");
    // setpadding('300px');
  };

  var date = new Date();
  date.setDate(date.getDate() + 3);
  //   console.log(date);
  // console.log(padding)

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
                    <button
                      type="submit"
                      // disabled={submitting || pristine}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <section
          className="h-custom margin"
          // style={{backgroundColor: 'blue'}}
        >
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
                {/* <div>
                    <p className="mb-1">Shopping cart</p>
                    <p className="mb-0">You have 4 items in your cart</p>
                  </div> */}

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
                      styled();
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
                          <div>
                            {/* <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                            className="img-fluid rounded-3"
                            alt="Shopping item"
                            style={{ width: "65px" }}
                          /> */}
                          </div>
                          <div className="ms-3">
                            <h5>{item.contact}</h5>
                            <p className="small mb-0">{item.mobile}</p>
                            <h5 className="fw-normal mb-0 p-0 text-wrap">
                              {item.location}, {item.address}, {item.pincode}
                            </h5>
                          </div>
                        </div>
                        {/* <div className="d-flex flex-row align-items-center"> */}
                        {/* <div style={{ width: "50px" }}>
                        </div>
                        <div style={{ width: "80px" }}>
                          <h5 className="mb-0">{item.pincode}</h5>
                        </div>
                        <a
                          href="#!"
                          // style="color: #cecece;"
                        > */}

                        {/* </a> */}
                        {/* </div> */}
                      </div>
                      {/* <div className="d-flex justify-content-between">
                      <i className="fas fa-trash-alt"></i>
                      <FiEdit/>
                      </div> */}
                      <div
                        className="col-lg-5 col-md-6 ms-3 d-flex mt-3"
                        style={styling}
                      >
                        {/* <p>Size: M</p> */}
                        <button
                          type="button"
                          className="btn border button ms-3 px-2"
                          data-mdb-toggle="tooltip"
                          title="Remove item"
                        >
                          {/* <i className="fas fa-trash"></i> */}
                          Remove
                        </button>
                        {/* <button
                                    type="button"
                                    className="btn border button p-1 ms-3 px-2"
                                    data-mdb-toggle="tooltip"
                                    title="Move to the wish list"
                                  > */}
                        {/* <FiEdit className="fs-6 p-0"/> */}
                        {/* Edit
                                  </button> */}
                        {/* <button
                          type="button"
                          className="btn border button ms-3 px-2"
                          data-bs-toggle="modal"
                          data-bs-target={`exampleModal${item.id}`}
                          data-bs-whatever="@edit"
                          // to={`/AddtoCart/addressform/Addressedit/${item.id}`}
                        >
                          Edit
                        </button> */}
                        {/* <div
                          className="modal fade"
                          id={`exampleModal${item.id}`}
                          tabIndex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        > */}
                          <AddressEdit index={key} item={item}/>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="col-lg-4 ms-4">
              <div className="card h-auto w-100">
                {/* <div className="d-flex justify-content-between"> */}
                <h6 className="ms-3 mt-3">DELIVERY ESTIMATES</h6>

                <div className="card-body p-0">
                  {/* <div className="d-flex flex-row align-items-center"> */}
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
                        {/* <hr /> */}
                      </div>
                    );
                  })}
                  {/* </div> */}
                </div>

                <div className="bg-white">
                  <div className="card-header py-3">
                    <h6 className="mb-0">PRICE DETAILS</h6>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      {/* <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Gratis</span>
                      </li> */}
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

                {/* </div> */}
              </div>
            </div>

            {/* <div className="col-lg-3">
                <div className="card bg-primary text-white rounded-3 h-100 w-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h5 className="mb-0">Card details</h5> */}
            {/* <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                        className="img-fluid rounded-3"
                        style={{ width: "45px" }}
                        alt="Avatar"
                      /> */}
            {/* </div> */}

            {/* <p className="small mb-2">Card type</p>
                    <Link to="/" type="submit" className="text-white">
                      <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                    </Link>
                    <Link to="/" type="submit" className="text-white">
                      <i className="fab fa-cc-visa fa-2x me-2"></i>
                    </Link>
                    <Link to="/" type="submit" className="text-white">
                      <i className="fab fa-cc-amex fa-2x me-2"></i>
                    </Link>
                    <Link to="/" type="submit" className="text-white">
                      <i className="fab fa-cc-paypal fa-2x"></i>
                    </Link> */}

            {/* <form className="mt-4">
                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          size="17"
                          placeholder="Cardholder's Name"
                        />
                        <label className="form-label">Cardholder's Name</label>
                      </div> */}
            {/* 
                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          siez="17"
                          placeholder="1234 5678 9012 3457"
                          minLength="19" */}
            {/* maxLength="19"
                        />
                        <label className="form-label">Card Number</label>
                      </div>

                      <div className="row mb-4">
                        <div className="col-lg-6">
                          <div className="form-outline form-white"> */}
            {/* <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="MM/YYYY"
                              size="7"
                              minLength="7"
                              maxLength="7"
                            /> */}
            {/* <label className="form-label">Expiration</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-outline form-white">
                            <input
                              type="password"
                              id="typeText"
                              className="form-control form-control-lg"
                              placeholder="&#9679;&#9679;&#9679;"
                              size="1"
                              minLength="3"
                              maxLength="3"
                            />
                            <label className="form-label">Cvv</label>
                          </div> */}
            {/* </div>
                      </div>
                    </form>

                    <hr className="my-4" />

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">$4798.00</p>
                    </div> */}
            {/* 
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Shipping</p>
                      <p className="mb-2">$20.00</p>
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-2">Total(Incl. taxes)</p>
                      <p className="mb-2">$4818.00</p>
                    </div> */}

            {/* <button
                      type="button"
                      className="btn btn-info btn-block btn-lg"
                    >
                      <div className="d-flex justify-content-between">
                        <span>$4818.00</span>
                        <span>
                          Checkout{" "}
                          <i className="fas fa-long-arrow-alt-right ms-2"></i>
                        </span>
                      </div>
                    </button> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
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
