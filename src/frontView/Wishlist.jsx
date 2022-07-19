import React from "react";
// import { Link } from "react-router-dom";
import {
  DeleteWishedProduct,
  fetchLoginUser,
  AddWishlist,
} from "../Actions/index";
import { connect } from "react-redux";
import AddButton from "./AddButton";
import { ImCross } from "react-icons/im";

function Wishlist(props) {
  // props.fetchLoginUser();
  let ListCart = [];
  Object.keys(props.items.Wishlist).forEach(function (item) {
    ListCart.push(props.items.Wishlist[item]);
  });

  const hello = (index) => {
    console.log(index);
    props.DeleteWishedProduct(index);
  };

  // console.log(props.items.Wishlist);

  return (
    <div>
      <section className="products_section margin2">
        <div className="heading_container">
          <h2>My Wishlist</h2>
          <p>{props.items.numberWishlist} Items</p>
        </div>

        <div className="container-fluid layout_padding">
          <div className="product_container">
            {ListCart.map((item, key) => {
              // console.log(item.quantity);
              // console.log(key);
              return (
                <div key={key}>
                  <div className="text-decoration-none shadow m-4 p-1">
                    <div>
                      <ImCross className="icon" onClick={() => hello(key)} />
                    </div>
                    <div className="product_box">
                      <div
                        className="product_img-box"
                        style={{ width: "100%", height: "200px" }}
                      >
                        <img
                          src={item.image}
                          className="img-fluid"
                          alt=""
                          style={{ width: "100%", height: "100%" }}
                        />
                        <span>Sale</span>
                      </div>
                      <div className="product_detail-box">
                        <h6 className="text-dark">Rs.{item.price}</h6>
                        <p>{item.productname}</p>
                      </div>
                      <div className="d-flex me-1 border btn ">
                        <AddButton id={item.id} productDetails={item} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  //  console.log(state)
  return {
    items: state.todoWishlist,
    userData: state.userData,
    products: state.allProducts,
  };
};

export default connect(mapStateToProps, {
  DeleteWishedProduct,
  fetchLoginUser,
  AddWishlist,
})(Wishlist);
