import React from 'react';
// import { Form, Field } from "react-final-f3orm";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { useState, useEffect } from 'react';


function ProductEdit(props) {
  const[data, setData] = useState({})
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
      
      const putUserdetails = async(data) =>{
    
        const methods = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        const response = await fetch(`http://localhost:5000/products/${id}`, methods)

      if (response.ok) {
          alert("done");
        }}

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
      
      const onsave = (e) =>{
          e.preventDefault();
          putUserdetails(data);
      }
    
  return (
    
    <div>
      <div className='container-fluid'>
       <div className="row m-0">
        <div className="col-lg-6">
          
              <form
                onSubmit={onsave}
                className="form-group row mt-4 mb-4"
              >
                <div className="offset-2 col-sm-8 offset-2">
                  

                  <input
                    className="form-control mb-3"
                    name="ProductName"
                    component="input"
                    type="text"
                    placeholder="Product Name"
                    value={data.ProductName}
                        onChange={handlechange}
                  />

                  <input
                    className="form-control mb-3"
                    name="Brand"
                    component="input"
                    type="text"
                    placeholder="Brand"
                    value={data.Brand}
                        onChange={handlechange}
                  />

                  <input
                    className="form-control mb-3"
                    name="price"
                    component="input"
                    type="number"
                    placeholder="Price"
                    value={data.price}
                    onChange={handlechange}
                  />

                  <input
                    className="form-control mb-3"
                    name="Image"
                    component="input"
                    placeholder="Images"
                    value={data.Image}
                    onChange={handlechange}
                  />


                  <input
                    className="form-control mb-3"
                    name="Description"
                    component="textarea"
                    placeholder="Description"
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

 

