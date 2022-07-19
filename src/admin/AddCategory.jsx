import axios from "axios";
import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { fetchCategories } from "../Actions";

class AddCategory extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.categories !== this.props.categories) {
      this.props.fetchCategories();
    }
  }

  onSubmit = async (values) => {
    var alias = values.categoryName.replace(/\s+/g,'').toLowerCase();
    values = {...values, alias: alias}
    
    var response = await axios.get(
      `http://localhost:5000/categories?categoryName=${values.categoryName}`
    );
    if (!response.data.length > 0) {
      axios.post("http://localhost:5000/categories", values);
    } else {
      alert("category already exist");
    }
  };

  
  deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      axios.delete(`http://localhost:5000/categories/${id}`);
    }
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
        <div className="row m-2">
        <div className="col-lg-3 col-sm-4 col-3 col-md-3">
            </div>
        <div className="col-lg-9 col-md-9 col-sm-8 col-9">
          <div className="p-1 bg-dark mt-3 rounded">
          <h2 className="text-white">Add Category</h2>
          </div>
<div className="row">
  <div className="col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 mb-3">
          <Form
            onSubmit={this.onSubmit}
            initialValues={{ categoryName: "" }}
            subscription={{ submitting: true, pristine: true }}
          >
            {({ handleSubmit, form, submitting, pristine }) => (
              <form onSubmit={handleSubmit} className="p-5 shadow">
                {/* <div className="form-group">
                  <label className="form-label fw-bold">Upload Image</label>
                  <Field
                    name="image"
                    component="input"
                    type="file"
                    className="form-control"
                  />
                  <button className="btn btn-primary mt-3">Upload</button>
                </div> */}

                <div className="form-group mt-3">
                  <label className="form-label fw-bold">Category Name</label>
                  <Field
                    name="categoryName"
                    component="input"
                    type="text"
                    placeholder="Category name"
                    className="form-control"
                  />
                </div>
                {/* <div className="form-group mt-3">
                  <label className="form-label fw-bold">Product Category</label>

                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Men</option>
                    <option>Women</option>
                    <option>Kids</option>
                    <option>Couples</option>
                  </select>
                </div>

                <div className="form-group mt-3">
                  <label className="form-label fw-bold">
                    Product Sub-Category
                  </label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Analog Watches</option>
                    <option>Digital Watches</option>
                    <option>Smart Watch</option>
                    <option>Dress Watches</option>
                    <option>Quartz Watches</option>
                    <option>Swiss Watches</option>
                    <option>Casual Watches</option>
                  </select>
                </div>

                <div className="form-group mt-3">
                  <label className="form-label fw-bold">Colors</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Red</option>
                    <option>Black</option>
                    <option>Blue</option>
                    <option>Green</option>
                    <option>Yellow</option>
                    <option>MultiColor</option>
                    <option>Pink</option>
                  </select>
                </div>

                <div className="form-group mt-3">
                  <label className="form-label fw-bold">
                    Product Manufacture Year
                  </label>
                  <Field
                    name="year"
                    component="input"
                    type="number"
                    placeholder="year"
                    className="form-control"
                  />
                </div>

                <div className="form-group mt-3">
                  <label className="form-label fw-bold">Product Price</label>
                  <Field
                    name="price"
                    component="input"
                    type="number"
                    placeholder="number"
                    className="form-control"
                  />
                </div>

                <div className="form-group mt-3">
                  <label className="form-label fw-bold">Product Quantity</label>
                  <Field
                    name="price"
                    component="input"
                    type="number"
                    placeholder="number"
                    className="form-control"
                  />
                </div>

                <div className="form-group mt-3">
                  <label className="form-label fw-bold">Product Brand</label>
                  <Field
                    name="brand"
                    component="input"
                    type="text"
                    placeholder="brand"
                    className="form-control"
                  />
                </div>

                <div className="form-group mt-3">
                  <label className="form-label fw-bold">
                    Additional Description
                  </label>
                  <Field
                    name="notes"
                    component="textarea"
                    placeholder="Notes"
                    className="form-control"
                  />
                </div> */}
                <div className="buttons mt-3">
                  <button
                    type="submit"
                    disabled={submitting || pristine}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                    className="btn btn-primary m-1"
                  >
                    Reset
                  </button>
                </div>
              </form>
            )}
          </Form>
        </div>
        </div>

        <div className="col-lg-12 col-sm-12 col-md-12 col-12 shadow">
            <div className="p-1 bg-dark mt-3 rounded">
          <h2 className="text-white">Categories</h2>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Category Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.categories.map((cat) => {
                return (
                  <tr key={cat.id}>
                    <td>{cat.categoryName}</td>
                    <td>
                      {/* <button className="btn btn-info">Edit</button> */}
                      <button className="btn btn-danger mx-1"  onClick={() => this.deleteUser(cat.id)}>Delete</button>
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
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.allCategory,
  };
};

export default connect(mapStateToProps, { fetchCategories })(AddCategory);
