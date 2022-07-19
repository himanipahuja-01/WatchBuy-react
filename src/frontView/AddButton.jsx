import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { connect } from "react-redux";
import { fetchProducts, AddCart, fetchLoginUser } from "../Actions/index";
import axios from "axios";

var cart = [];

function AddButton(props) {
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

  // props.fetchLoginUser();
  // console.log(props.userData)

  const handleAddCart = async (id) => {
    // setItemId((prev)=>([...prev, id]))
    cart.push(id);
    var res = await axios({
      method: "patch",
      url: "http://localhost:5000/user/1",
      data: {
        addcart: cart,
      },
    });
    // console.log(props.productDetails);
    props.AddCart(props.productDetails);
    // console.log(res.data)
    styled();

    setTimeout(() => {
      hide();
    }, 1000);
    // console.log(props);
  };

  return (
    <div>
      <div
        className="bg-dark sizing ms-auto text-white mt-5 shadow rounded"
        style={styling}
      >
        Added to Cart
        <TiTick />
      </div>
      <div className="d-flex">
        <Link to="" className="btn btn-sm text-dark p-0">
          <i className="text-primary"></i>
          <BsFillCartFill className="h5" style={{ color: "#c0392b" }} />
          <span
            className="fw-bolder btn-clr"
            onClick={() => {
              // props.AddCart(props);
              handleAddCart(props.id);
            }}
          >
            Add To Cart
          </span>
        </Link>
      </div>
    </div>
  );
}

// export default AddButton;

// const mapStateToProps = (state) => {
//    console.log(state)
//   return {
//     userData: state.userData,
//       };
// }

function mapDispatchToProps(dispatch) {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    AddCart: (props) => dispatch(AddCart(props)),
  };
}

export default connect(mapDispatchToProps, {
  fetchProducts,
  AddCart,
  fetchLoginUser,
})(AddButton);
