// import React, { Component } from "react";
import axios from "axios";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
  fetchLoginUser,
} from "../Actions/index";
import { connect } from "react-redux";

// import { AiOutlineClose } from "react-icons/ai";

var cart = [];
var cart1 = [];

function AddtoCart({
  items,
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
  fetchLoginUser,
  userData,
}) {
  fetchLoginUser();
  console.log(userData[0].addcart);

  //   console.log(items)
  let ListCart = [];
  let TotalCart = 0;
  Object.keys(items.Cart).forEach(function (item) {
    TotalCart += items.Cart[item].quantity * items.Cart[item].price;
    ListCart.push(items.Cart[item]);
    cart.push(items.Cart[item].id);
  });
  function TotalPrice(price, tonggia) {
    return Number(price * tonggia).toLocaleString("en-US");
  }

  const IncreaseAdd = async (key, id) => {
    //   cart.push(id);

    cart1.push(id);
    var res = await axios({
      method: "patch",
      url: "http://localhost:5000/user/1",
      data: {
        addcart: cart1,
      },
    });
    IncreaseQuantity(key);
  };

  const DecreaseDel = async (key) => {
    cart.pop();
    var res = await axios({
      method: "patch",
      url: "http://localhost:5000/user/1",
      data: {
        addcart: cart,
      },
    });
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

  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {ListCart.map((item, key) => {
              // console.log(item.id)
              return (
                <tr key={key}>
                  <td>
                    <span
                      className="text-danger"
                      onClick={() => DeleteCart(key)}
                    >
                      X
                    </span>
                  </td>
                  <td>{item.ProductName}</td>
                  <td>
                    <img
                      src={item.image}
                      style={{ width: "100px", height: "80px" }}
                    />
                  </td>
                  <td>{item.price} $</td>
                  <td>
                    <span
                      className="btn btn-primary"
                      style={{ margin: "2px" }}
                      onClick={() => DecreaseDel(key)}
                    >
                      -
                    </span>
                    <span className="btn btn-info">{item.quantity}</span>
                    <span
                      className="btn btn-primary"
                      style={{ margin: "2px" }}
                      onClick={() => IncreaseAdd(key, item.id)}
                    >
                      +
                    </span>
                  </td>
                  <td>{TotalPrice(item.price, item.quantity)} $</td>
                </tr>
              );
            })}
            <tr>
              <td colSpan="5">Total Carts</td>
              <td>{Number(TotalCart).toLocaleString("en-US")} $</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
})(AddtoCart);
