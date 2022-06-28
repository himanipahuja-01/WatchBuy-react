import React from "react";
// import { Form, Field } from "react-final-f3orm";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { useState, useEffect } from "react";

function ProductEdit(props) {
  const [data, setData] = useState({});
  let { id } = useParams();

  const getUserdetails = async () => {
    const response = await fetch(`http://localhost:5000/products/${id}`, {
      method: "GET",
    });
    if (response.ok) {
      const product = await response.json();
      // console.log(user);
      setData(product);
    }
  };
  console.log(data);

  const putUserdetails = async (data) => {
    const methods = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(
      `http://localhost:5000/products/${id}`,
      methods
    );

    if (response.ok) {
      alert("done");
    }
  };

  useEffect(() => {
    getUserdetails();
  }, []);

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const onsave = (e) => {
    e.preventDefault();
    putUserdetails(data);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-4">
            </div>
          <div className="col-lg-8">
            <form onSubmit={onsave} className="form mt-4 mb-4">
              <div className="offset-2">
                <input
                  className="form-control mb-3"
                  name="ProductName"
                  type="text"
                  placeholder="Product Name"
                  value={data.productname}
                  onChange={handlechange}
                />

                <input
                  className="form-control mb-3"
                  name="Brand"
                  type="text"
                  placeholder="Brand"
                  value={data.brand}
                  onChange={handlechange}
                />

                <input
                  className="form-control mb-3"
                  name="price"
                  type="number"
                  placeholder="Price"
                  value={data.price}
                  onChange={handlechange}
                />

                <input
                  className="form-control mb-3"
                  name="color"
                  type="text"
                  placeholder="color"
                  value={data.color}
                  onChange={handlechange}
                />

                <input
                  className="form-control mb-3"
                  name="Description"
                  component="textarea"
                  placeholder="Description"
                  value={data.Description}
                  onChange={handlechange}
                />

                <button className="btn btn-danger text-white" type="submit">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductEdit;
