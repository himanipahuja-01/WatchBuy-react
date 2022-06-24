import axios from "axios";
import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { fetchProducts, fetchCategories } from "../Actions/index";
import { Link } from "react-router-dom";

class AddProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: [{ key: "", value: "" }],
      selectedFile: "",
    };

    this.value = "";
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  componentDidUpdate() {
    this.props.fetchProducts();
  }

  name = [];
  handleChange = (index, e) => {
    console.log(index);
    this.name[index] = e.target.value;
    console.log(this.name);
  };
  Address = ({ name, index }) => (
    <React.Fragment>
      <input
        name={`${name}.name[index]`}
        className="form-control border bg-light border-2"
        component="input"
        placeholder="Key"
        onChange={(e) => this.handleChange(index, e)}
      />

      <Field
        name={`${name}.${this.name[index]}`}
        className="form-control"
        component="input"
        placeholder="Value"
      />
    </React.Fragment>
  );

  addFormFields() {
    this.setState({
      formValues: [...this.state.formValues, { key: "", value: "" }],
    });
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  onSubmit = (values) => {
    console.log(values);
    values.image = this.base64code;
    axios.post("http://localhost:5000/products", values);
  };

  deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios.delete(`http://localhost:5000/products/${id}`);
    }
  };

  base64code = "";
  onChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    this.getBase64(file);
  };

  onLoad = (fileString) => {
    console.log(fileString);
    this.base64code = fileString;
  };

  getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.onLoad(reader.result);
    };
  };

  required = (value) => (value ? undefined : "Required");

  render() {
    return (
      <div className="conatiner-fluid">
        <div className="row m-0">
          <div className="col-lg-6">
            <Form onSubmit={this.onSubmit}>
              {({ handleSubmit, form, submitting, pristine, values }) => (
                <form
                  onSubmit={handleSubmit}
                  className="form-group row mt-4 mb-4"
                >
                  <div className="offset-2 col-sm-8 offset-2">
                    <div className="mb-3">
                      <div className="btn-group w-100">
                        <button
                          type="button"
                          className="btn btn-danger dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {this.value}
                        </button>
                        <ul className="dropdown-menu">
                          {this.props.categories.map((cat) => {
                            return (
                              <>
                                <li className="dropdown-item" key={cat.id}>
                                  <div className="form-check">
                                    <Field
                                      name="categoryName"
                                      component="input"
                                      type="checkbox"
                                      className="form-check-input"
                                      value={cat.categoryName}
                                      id={cat.alias}
                                    />

                                    <label
                                      className="form-check-label"
                                      htmlFor="alias"
                                    >
                                      {cat.categoryName}
                                    </label>
                                  </div>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    <Field
                      className="form-control mb-3"
                      name="productname"
                      component="input"
                      type="text"
                      placeholder="Product Name"
                    />

                    <Field
                      className="form-control mb-3"
                      name="brand"
                      component="input"
                      type="text"
                      placeholder="Brand"
                    />

                    <Field
                      className="form-control mb-3"
                      name="color"
                      component="input"
                      type="text"
                      placeholder="color"
                    />

                    <Field
                      className="form-control mb-3"
                      name="price"
                      component="input"
                      type="number"
                      placeholder="Price"
                    />

                    <input type="file" onChange={this.onChange} />

                    {this.state.formValues.map((element, index) => (
                      <div className="input-group mb-3" key={index}>
                        {index ? (
                          <>
                            <this.Address
                              name={`Attribute.${index - 1}`}
                              index={index}
                            />

                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => this.removeFormFields(index)}
                            >
                              x
                            </button>
                          </>
                        ) : null}
                      </div>
                    ))}
                    <button
                      className="btn btn-success mb-3"
                      type="button"
                      onClick={() => this.addFormFields()}
                    >
                      + Add New Field{" "}
                    </button>

                    <Field
                      className="form-control mb-3"
                      name="Description"
                      component="textarea"
                      placeholder="Description"
                    />

                    <button className="btn btn-danger text-white" type="submit">
                      Add Product
                    </button>
                    <button
                      className="btn btn-danger text-white ms-4 "
                      type="submit"
                      onClick={form.reset}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              )}
            </Form>
          </div>

          <div className="col-lg-6">
            <table className="table">
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
        {/* <ViewProducts /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.allCategory,
    products: state.allProducts,
  };
};

export default connect(mapStateToProps, { fetchProducts, fetchCategories })(
  AddProducts
);
