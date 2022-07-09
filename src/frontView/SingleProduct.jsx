// import axios from "axios";
import React from "react";
import { connect } from "react-redux";
// import { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
// import { FaHeart } from "react-icons/fa";
import { fetchProducts, AddCart } from "../Actions/index";
import { Link } from "react-router-dom";
import AddButton from "./AddButton";
import WishlistButton from "./WishlistButton";

// var cart = [];

function SingleProduct(props) {
  // const [itemId, setItemId] = useState([]);
  // const [all, setAll] = useState(true)

  // const [color, setColor] = useState("#ffcccc");
  // const styleSheet = () => {
  //   setColor("#c0392b");
  // };

  // const style = {
  //   color: `${color}`,
  //   cursor: "pointer",
  // };

  // const [show, setShow] = useState("hidden");

  // const styling = {
  //   visibility: `${show}`,
  // };

  // const styled = () => {
  //   setShow("visible");
  // };

  // const hide = () => {
  //   setShow("hidden");
  // };

  // const handleAddCart = async (id) => {
  // setItemId((prev)=>([...prev, id]))
  // cart.push(id);
  // var res = await axios({
  //   method: "patch",
  //   url: "http://localhost:5000/user/1",
  //   data: {
  //     addcart: cart,
  //   },
  // });
  //   console.log(props);
  //   props.AddCart(props);
  //   // console.log(res.data)
  //   styled();

  //   setTimeout(() => {
  //     hide();
  //   }, 1000);
  // };
  // console.log(props);

  return (
    <div>
      {/* <div
        className="bg-dark sizing ms-auto text-white mt-5 shadow rounded"
        style={styling}
      >
        Added to Cart
        <TiTick />
      </div> */}
      <div className="card mt-5 borderRou border-0 size shadow-lg">
        <div
          className="card-header overflow-hidden border-0 borderRou"
          style={{ width: "100%", height: "200px" }}
        >
          <img
            src={props.image}
            style={{ width: "100%", height: "100%" }}
            className="zoom img-fluid figure borderRou"
            alt="..."
          />

          {/* <FaHeart
            className="fs-3 wishlist"
            style={style}
            onClick={() => styleSheet("Red")}
          /> */}
          <WishlistButton id={props.id} productDetails={props}/>
        </div>
        <div className="">
          <h6 className="text-justify text-center">{props.productname}</h6>
          <h6 className="text-truncate text-center text-secondary">
            {props.brand}
          </h6>
          <div className="d-flex justify-content-center p-2">
            <h6 className="ms-0">Rs.{props.price}</h6>
            {/* <p className="me-0 btn text-secondary"> */}
            {/* <del>Rs.{props.price - 3}</del> */}
            {/* </p> */}
          </div>
        </div>

        <div className="card-footer d-flex justify-content-between bg-light border-0 p-0 borderRou">
          {/* <p className="me-auto btn">{<BsFillEyeFill />}View All</p> */}
          <div className="d-flex ms-2">
            <Link
              to={`/ProductDescription/${props.id}`}
              className="btn btn-sm text-dark p-0"
            >
              <i className="text-primary mr-1"></i>
              <BsFillEyeFill className="h5" style={{ color: "#c0392b" }} />{" "}
              <span className="fw-bolder btn-clr"> View Detail</span>
            </Link>
          </div>
          {/* <p className="ms-5 btn">{<BsFillCartFill />}View All</p> */}
          {/* <Link to="" className="btn btn-sm text-dark p-0">
            <i className="text-primary mr-1"></i>
            <BsFillCartFill className="h3 pe-2" style={{ color: "#c0392b" }} />
            <span
              className="fw-bolder fs-6 btn-clr"
              onClick={() => {
                // props.AddCart(props);
                handleAddCart(props.id);
              }}
            >
              Add To Cart
            </span>
          </Link> */}
          <div className="d-flex me-1">
            <AddButton id={props.id} productDetails={props} />
          </div>
        </div>
      </div>
      {/* <AddtoCart id ={props.id} /> */}
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    AddCart: (props) => dispatch(AddCart(props)),
  };
}

// export default SingleProduct;
export default connect(mapDispatchToProps, { fetchProducts, AddCart })(
  SingleProduct
);
