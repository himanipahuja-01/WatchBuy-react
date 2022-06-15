// import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../Actions/index";
import SingleProduct from "./SingleProduct";

class SingeProductShow extends Component {
  constructor(props){
    super(props)


  }
  componentDidMount() {
    this.props.fetchProducts(this.props.item);
    // console.log(this.props.item)
  }


  render() {
   
    return (
      <div>
    <label>filter items
      <select className="form-control">
        <option>All</option>
        <option>rado</option>
        <option>rolex</option>
        <option>fasttrack</option>
      </select>
    </label>

        <div className="container-fluid">
          <div className="row">
            {this.props.products.map((item) => {
              // console.log(this.props.products);
              return (
                <div className="col-3">
                  <SingleProduct
                    key={item.id}
                    id={item.id}
                    name={item.ProductName}
                    price={item.price}
                    image={item.image}
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

export default connect(mapToStateProps, { fetchProducts})(SingeProductShow);
