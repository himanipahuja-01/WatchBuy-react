import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { RiImageAddFill } from 'react-icons/ri';

class Products extends Component {
  render() {

    return (
<div>
<div className="container-fluid mt-3">
  <div className="row hih">
    <div className="col-lg-3 col-sm-3 col-3 col-md-3">

    </div>
    <div className="col-lg-9 col-md-9 col-sm-9 col-9 bacimage">
      <div className="row">
    <div className="col-lg-6 col-sm-8 col-6 col-md-7 bg-light w-50 p-3 text-center">
      <Link to = "/admin/addproducts" className="text-decoration-none text-dark fs-2 fw-bolder">Add Product</Link>
    </div>
    <div className="col-lg-6 bg-light py-2 w-25 position-absolute bottom-0 end-0 text-center">
      <Link to='/admin/viewproducts' className="text-decoration-none fs-2 fw-bolder text-dark">View Products</Link>
    </div>
    </div>
    </div>
  </div>
</div> 
      </div>
    );
  }
}

export default Products;
