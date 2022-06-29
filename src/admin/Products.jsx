import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { RiImageAddFill } from 'react-icons/ri';

class Products extends Component {
  render() {

    return (
<div>
<div className="container-fluid mt-3">
  <div className="row hih">
    <div className="col-lg-3">

    </div>
    <div className="col-lg-9 bacimage">
      <div className="row">
    <div className="col-lg-6 text-center">
      <Link to = "/admin/addproducts" className="text-decoration-none">Add Product</Link>

     
    </div>
    <div className="col-lg-6 text-center">
      <Link to='/admin/viewproducts' className="text-decoration-none">View Products</Link>
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
