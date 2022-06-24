// import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts, fetchProductsByCat } from "../Actions/index";
import SingleProduct from "./SingleProduct";


class SingeProductShow extends Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    // console.log(this.props.fetchProductsByCat())
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {this.props.products.map((item) => {
              // console.log(this.props.products);
              return (
                <div className="col-xl-4 col-md-4 d-flex mb-2 justify-content-around">
                  <SingleProduct
                    key={item.id}
                    id={item.id}
                    productname={item.productname}
                    price={item.price}
                    image={item.image}
                    brand = {item.brand}
                    color = {item.color}
                  />

               
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapToStateProps = (state) => {
  return {
    products: state.allProducts,
 
  };
};

export default connect(mapToStateProps, { fetchProducts, fetchProductsByCat })(
  SingeProductShow
);
