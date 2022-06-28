import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchProducts } from "../Actions/index";
import { Link } from "react-router-dom";

class ViewProducts extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios.delete(`http://localhost:5000/products/${id}`);
    }
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-9">
              <table className="table w-100">
                <thead>
                  <tr>
                    {/* <th>Category Name</th> */}
                    <th>Product Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.products.map((item) => {
                    return (
                      <tr key={item.id}>
                        {/* <td>{cat.categoryName}</td> */}
                        <td>{item.productname}</td>
                        <td>{item.brand}</td>
                        <td>Rs.{item.price}</td>

                        <td>
                          <Link
                            className="btn btn-info mb-3"
                            to={`ProductEdit/${item.id}`}
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-danger"
                            onClick={() => this.deleteUser(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.allProducts,
  };
};

export default connect(mapStateToProps, { fetchProducts })(ViewProducts);
