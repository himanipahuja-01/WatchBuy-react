// import axios from "axios";
import React from "react";
import SingeProductShow from "./SingeProductShow";
import { connect } from "react-redux";
import { fetchProductsByCat, fetchProductsbybrand, fetchProductsbyColor } from "../Actions/index";

function About(props) {
  var categoryName = ["Men", "Women", "Kids"];
  var Brand = ["Fastrack", "Fossil", "Titan","Daniel Klein"];
  var Color = ["Black", "Blue", "Gold","Rose-gold","Silver","Red"];

  const handleClick = (item) => {
    props.fetchProductsByCat(item);
  };

  const handleBrand = (item) => {
    props.fetchProductsbybrand(item);
  };

  const handleColor = (item) => {
    props.fetchProductsbyColor(item);
  };

  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-2 shadow">
            <label className="fw-bold mt-3 mb-1 text-center">FILTERS</label>
            <hr></hr>
            <label className="mb-2 fw-bold">Categories</label>
            {categoryName.map((item, index) => (
              <div key={index}>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => {
                      handleClick(item);
                    }}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    {item}
                  </label>
                </div>
              </div>
            ))}
            <hr></hr>

            <label className="mb-2 fw-bold">Brand</label>
            {Brand.map((item, index) => (
              <div key={index}>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => {
                      handleBrand(item);
                    }}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    {item}
                  </label>
                </div>
              </div>
            ))}
            <hr></hr>

            <label className="mb-2 fw-bold">Color</label>
            {Color.map((item, index) => (
              <div key={index}>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => {
                      handleColor(item);
                    }}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    {item}
                  </label>
                </div>
              </div>
            ))}
            <hr></hr>

          </div>

          <div className="col-lg-10 color">
            <SingeProductShow />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapToStateProps = (state) => {
  return {
    products: state.allProducts,
  };
};

export default connect(mapToStateProps, { fetchProductsByCat, fetchProductsbybrand, fetchProductsbyColor})(About);
