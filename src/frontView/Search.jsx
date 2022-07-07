import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { fetchProducts } from "../Actions/index";
import { Link, useNavigate } from "react-router-dom";


function Search(props) {
  const [isSearchValid, setIsSearchValid] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    props.fetchProducts()
  }, []);

  const filteredItems = props.products.filter(item => 
  item.productname.toLowerCase().indexOf(q.toLowerCase()) >= 0
  );

  console.log(filteredItems)
  // setItems(filteredItems)

const handleChange = (e) =>{
  if(e.target.value.length > 2){
    setIsSearchValid(true);
  }
  else{
    setIsSearchValid(false);
  }
  setQ(e.target.value);
}
  return (
    <div className="wrapper me-5">
      <div className="search-wrapper">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search position-relative form-control"
            placeholder="Search for..."
            value={q}
            onChange={handleChange}
          />
          
        </label>
      </div>
      <div className="position-absolute bg-white text-dark" style={{cursor: "pointer"}}>

        {
          isSearchValid?
        filteredItems.map((item) => (
          <Link to="/ProductDescription/:id">{item.productname}</Link>
        )): ""
        }
      </div>
    </div>
  );
}

// export default Search;
const mapToStateProps = (state) => {
  return {
    products: state.allProducts,
 
  };
};

export default connect(mapToStateProps, { fetchProducts })(
  Search
);
