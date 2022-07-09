import React from "react";
// import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { connect } from "react-redux";
import { fetchProducts, AddWishlist, fetchLoginUser } from "../Actions/index";
import axios from "axios";

var wishlist = [];

function WishlistButton(props) {
  const [color, setColor] = useState("#ffcccc");
  const styleSheet = () => {
    setColor("#c0392b");
  };

  const style = {
    color: `${color}`,
    cursor: "pointer",
  };

  const [show, setShow] = useState("hidden");

  const styling = {
    visibility: `${show}`,
  };

  const styled = () => {
    setShow("visible");
  };

  const hide = () => {
    setShow("hidden");
  };

  props.fetchLoginUser();

  const handleAddCart = async (id) => {
    wishlist.push(id);
    var res = await axios({
      method: "patch",
      url: "http://localhost:5000/user/1",
      data: {
        wishlist : wishlist,
      },
    });

    props.AddWishlist(props.productDetails);
    styled();
    styleSheet()

    setTimeout(() => {
      hide();
    }, 1000);
  };

  return (
    <div>
      <div
        className="bg-dark sizing ms-auto text-white mt-5 shadow rounded"
        style={styling}
      >
        Added to Wishlist
        <FaHeart />
      </div>

     
        <div className="d-flex">
          <FaHeart
            className="fs-3 wishlist"
            style={style}
            onClick={() => handleAddCart(props.id)}
          />
        </div>
    
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    AddWishlist: (props) => dispatch(AddWishlist(props)),
  };
}

export default connect(mapDispatchToProps, {
  fetchProducts,
  AddWishlist,
  fetchLoginUser,
})(WishlistButton);
