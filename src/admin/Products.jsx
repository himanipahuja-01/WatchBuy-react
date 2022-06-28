import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { RiImageAddFill } from 'react-icons/ri';

class Products extends Component {
  render() {

    return (
<div>
<div className="container-fluid mt-3 bacimage">
  <div className="row">
    <div className="col-lg-3">

    </div>
    <div className="col-lg-4">
      <Link to = "/admin/addproducts">Add Product</Link>

     
    </div>
    <div className="col-lg-4">
      <Link to='/admin/viewproducts'>View Products</Link>
    </div>
  </div>
</div> 
      </div>
    );
  }
}

export default Products;
