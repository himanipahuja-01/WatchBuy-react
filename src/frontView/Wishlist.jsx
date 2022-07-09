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
  props.fetchLoginUser();
  let ListCart = [];
//   let TotalCart = 0;
  Object.keys(props.items.Wishlist).forEach(function (item) {
    // TotalCart +=
    //   props.items.Wishlist[item].quantity * props.items.Wishlist[item].price;
    ListCart.push(props.items.Wishlist[item]);
  });

  console.log(props.items);

  return (
    <div>
      <section className="products_section margin2">
        <div className="heading_container">
          <h2>My Wishlist</h2>
          <p>{props.items.numberWishlist} Items</p>
        </div>

        <div className="container layout_padding">
          <div className="product_container container-fluid">
            {ListCart.map((item, index) => {
              console.log(item);
              // console.log(key);
              return (
                <>
                  <div className="text-decoration-none shadow-lg m-4">
                    <div onClick={()=>DeleteWishedProduct(item.id)}>
                    <ImCross className="icon" />
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
                </>
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
