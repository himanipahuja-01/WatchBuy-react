// import React, { Component } from "react";
import axios from "axios";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
  fetchLoginUser,
  AddCart,
} from "../Actions/index";
import { connect } from "react-redux";
import BlankCart from "./BlankCart";
import IncreDecre from "./IncreDecre";
import { Link } from "react-router-dom";
// import { useEffect } from "react";

// import { AiOutlineClose } from "react-icons/ai";

// var cart = [];

function AddtoCart({
  items,
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
  fetchLoginUser,
  userData,
  AddCart,
}) {
  // props
  fetchLoginUser();
  // console.log(props)

  // console.log(userData[0].addcart);

  // console.log(items);
  let ListCart = [];
  let TotalCart = 0;
  Object.keys(items.Cart).forEach(function (item) {
    TotalCart += items.Cart[item].quantity * items.Cart[item].price;
    ListCart.push(items.Cart[item]);
  });

  // function TotalPrice(price, tonggia) {
  //   return Number(price * tonggia).toLocaleString("en-US");
  // }

  // var cart1 = [];

  // const IncreaseAdd = async (key, id) => {
  //     cart.push(id);
  //   cart1.push(id);
  //   // console.log(cart1);
  //   cart.push(cart1[0]);
  //   // console.log(cart1)
  //   cart1 = [];
  //   console.log(cart1);
  //   var res = await axios({
  //     method: "patch",
  //     url: "http://localhost:5000/user/1",
  //     data: {
  //       addcart: cart,
  //     },
  //   });
  //   ;
  // };

  // const DecreaseDel = async (key) => {
  //   var data = userData[0].addcart.splice();
  //   var res = await axios({
  //     method: "patch",
  //     url: "http://localhost:5000/user/1",
  //     data: {
  //       addcart: cart,
  //     },
  //   });
  //   DecreaseQuantity(key);
  // };
  var cart = [];
  const DeleteClick = async (key) => {
    DeleteCart(key);
    Object.keys(items.Cart).forEach(function (item) {
      TotalCart += items.Cart[item].quantity * items.Cart[item].price;
      cart.push(items.Cart[item].id);
      console.log(items.Cart[item]);
    });

    console.log(items);

    var res = await axios({
      method: "patch",
      url: `http://localhost:5000/user/1`,
      data: {
        addcart: cart,
      },
    });
    // DeleteCart()
    DecreaseQuantity(key);
  };

  // var length = this.props.userData.length;

  // var x;
  // if (length > 0) {
  //   x = this.props.userData[0].addcart;
  // }
  // console.log(x);

  // x.map((id) => {
  //   console.log(this.props.products);
  //   this.props.fetchProductsbyId(x[0]);
  // });
  // console.log(this.props.loginData)

  // console.log(userData[0].addcart);
  // console.log(products[0]);
  // console.log(items);
  console.log(items);

  return (
    <>
      {
        !items.numberCart > 0 ? (
          <BlankCart />
        ) : (
          <div className="container-fluid color">
            <section className="h-100 gradient-custom margin">
              <div className="container py-5">
                <div className="row d-flex justify-content-center my-4">
            
                  <div className="col-lg-8">

                  {/* <div className="accordion mb-5 borderRou" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div> */}

                    <div className="border mb-4 borderRou bg-white">
                      <div className="card-header py-3 borderRou">
                        <h5 className="mb-0">Cart - {items.numberCart}</h5>
                      </div>
                      {ListCart.map((item, index) => {
                        // console.log(item.quantity);
                        // console.log(key);
                        return (
                          <>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                  <div
                                    className="bg-image hover-overlay hover-zoom ripple rounded"
                                    data-mdb-ripple-color="light"
                                  >
                                    <img
                                      src={item.image}
                                      className="w-100"
                                      alt="Blue Jeans Jacket"
                                    />
                                    <a href="#!">
                                      <div
                                        className="mask"
                                        style={{
                                          BackgroundColor:
                                            "rgba(251, 251, 251, 0.2)",
                                        }}
                                      ></div>
                                    </a>
                                  </div>
                                </div>

                                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                  <p>
                                    <strong>{item.productname}</strong>
                                  </p>
                                  <p>{item.color}</p>
                                  {/* <p>Size: M</p> */}
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-sm me-1 mb-2"
                                    data-mdb-toggle="tooltip"
                                    title="Remove item"
                                    onClick={() => DeleteClick(index)}
                                  >
                                    <i className="fas fa-trash"></i>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger btn-sm mb-2"
                                    data-mdb-toggle="tooltip"
                                    title="Move to the wish list"
                                  >
                                    <i className="fas fa-heart"></i>
                                  </button>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                  {/* <div
                                    className="d-flex mb-4"
                                    style={{ width: "10px" }}
                                  >
                                    <button
                                      className="btn btn-primary me-2 px-3"
                                      style={{ height: "40px" }}
                                      onClick={() => DecreaseQuantity(key)}
                                    > */}
                                  {/* <i className="fas fa-minus p-0"></i>
                                    </button> */}

                                  {/* <div
                                      className="form-outline"
                                      style={{ width: "50px" }}
                                    > */}
                                  {/* <input
                                        id="form1"
                                        min="0"
                                        name="quantity"
                                        value={item.quantity}
                                        // type="number"
                                        className="form-control"
                                      /> */}
                                  {/* <h6
                                        className="form-label mt-2"
                                        htmlFor="form1"
                                      >
                                        Quantity
                                      </h6>
                                    </div> */}

                                  {/* <button
                                      className="btn btn-primary px-3 ms-2"
                                      style={{ height: "40px" }}
                                      onClick={() => IncreaseQuantity(key)}
                                    > */}
                                  {/* <i className="fas fa-plus"></i>
                                    </button> */}
                                  {/* </div> */}

                                  <IncreDecre
                                    ind={index}
                                    // quantity={item.quantity}
                                    data={item}
                                  />
                                  <h6 className="text-start text-lg-center me-1">
                                    Price- Rs.{item.price}
                                    {/* {TotalPrice(item.price, item.quantity)} */}
                                  </h6>
                                </div>
                              </div>

                              {/* <hr className="my-4"/> */}
                            </div>
                          </>
                        );
                      })}
                    </div>

                    <div className="border mb-4 borderRou bg-white">
                      <div className="card-body">
                        <p>
                          <strong>Expected shipping delivery</strong>
                        </p>
                        <p className="mb-0">12.10.2020 - 14.10.2020</p>
                      </div>
                    </div>
                    <div className="border mb-4 mb-lg-0 borderRou bg-white">
                      <div className="card-body">
                        <p>
                          <strong>We accept</strong>
                        </p>
                        <img
                          className="me-2"
                          width="45px"
                          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                          alt="Visa"
                        />
                        <img
                          className="me-2"
                          width="45px"
                          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                          alt="American Express"
                        />
                        <img
                          className="me-2"
                          width="45px"
                          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                          alt="Mastercard"
                        />
                        {/* <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
              alt="PayPal acceptance mark" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="border borderRou mb-4 bg-white">
                      <div className="card-header borderRou py-3">
                        <h5 className="mb-0">Summary</h5>
                      </div>
                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Products
                            <span>{TotalCart}</span>
                          </li>
                          {/* <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Gratis</span>
                      </li> */}
                          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <div>
                              <strong>Total amount</strong>
                              <strong>
                                <p className="mb-0">(including VAT)</p>
                              </strong>
                            </div>
                            <span>
                              <strong>
                                {Number(TotalCart).toLocaleString("en-US")}
                              </strong>
                            </span>
                          </li>
                        </ul>

                        <Link
                          type="button"
                          className="btn btn-primary btn-lg btn-block"
                          to="/AddtoCart/addressform"
                        >
                          Go to checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )

        // <div className="row margin">
        //   <div className="col-md-12">
        //     <table className="table">
        //       <thead>
        //         <tr>
        //           <th></th>
        //           <th>Name</th>
        //           <th>Image</th>
        //           <th>Price</th>
        //           <th>Quantity</th>
        //           <th>Total Price</th>
        //         </tr>
        //       </thead>
        //       <tbody>
        //         {ListCart.map((item, key) => {
        //           // console.log(item.id)
        //           return (
        //             <tr key={key}>
        //               <td>
        //                 <span
        //                   className="text-danger"
        //                   onClick={() => DeleteCart(key)}
        //                 >
        //                   X
        //                 </span>
        //               </td>
        //               <td>{item.ProductName}</td>
        //               <td>
        //                 <img
        //                   src={item.image}
        //                   style={{ width: "100px", height: "80px" }}
        //                 />
        //               </td>
        //               <td>{item.price} $</td>
        //               <td>
        //                 <span
        //                   className="btn btn-primary"
        //                   style={{ margin: "2px" }}
        //                   onClick={() => DecreaseDel(key)}
        //                 >
        //                   -
        //                 </span>
        //                 <span className="btn btn-info">{item.quantity}</span>
        //                 <span
        //                   className="btn btn-primary"
        //                   style={{ margin: "2px" }}
        //                   onClick={() => IncreaseAdd(key, item.id)}
        //                 >
        //                   +
        //                 </span>
        //               </td>
        //               <td>{TotalPrice(item.price, item.quantity)} $</td>
        //             </tr>
        //           );
        //         })}
        //         <tr>
        //           <td colSpan="5">Total Carts</td>
        //           <td>{Number(TotalCart).toLocaleString("en-US")} $</td>
        //         </tr>
        //       </tbody>
        //     </table>
        //   </div>
        // </div>
      }
    </>
  );
}
const mapStateToProps = (state) => {
  //  console.log(state)
  return {
    items: state.todoProduct,
    userData: state.userData,
    products: state.allProducts,
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
  fetchLoginUser,
  AddCart,
})(AddtoCart);
