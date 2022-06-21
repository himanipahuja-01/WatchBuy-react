// import axios from "axios";
import React from "react";
import SingeProductShow from "./SingeProductShow";
import { connect } from "react-redux";
import { fetchProductsByCat } from "../Actions/index";

function About(props) {
  var categoryName = ["watches", "electronics"];

  const handleClick = (item)=>{  
  props.fetchProductsByCat(item)
  }

  return (
    <div>
      <label>
        Filter items
        {/* <select style={{width:"50%" , borderRadius:"2px", height: "35px"}} */}
        {/* > */}
        {/* <option>Please select brand</option> */}
        {categoryName.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => {
                handleClick(item)
              }}
              value={item}
              key={index}
            >
              {item}
            </button>

            {/* <SingeProductShow item={item} key={index} /> */}
          </div>
        ))}
        {/* </select> */}
      </label>
{/* {props.products.map((item)=>{
  return(
    console.log(item)
  )
})} */}
      <SingeProductShow  />
    </div>
  );
}

const mapToStateProps = (state) => {
  return {
    products: state.allProducts,
  };
};

export default connect(mapToStateProps, { fetchProductsByCat })(
  About
);

