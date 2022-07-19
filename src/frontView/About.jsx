// import axios from "axios";
import React , {useState}from "react";
import SingeProductShow from "./SingeProductShow";
import { connect } from "react-redux";
import { fetchProductsByCat, fetchProductsbybrand, fetchProductsbyColor } from "../Actions/index";


function About(props) {
  var categoryName = ["Men", "Women", "Kids"];
  var Brand = ["Fastrack", "Fossil", "Titan","Daniel Klein"];
  var Color = ["Black", "Blue", "Gold","Rose-gold","Silver","Red"];

  const handleClick = (item) => {
    props.fetchProductsByCat(item);
  };

  const handleBrand = (item) => {
    props.fetchProductsbybrand(item);
  };

  const handleColor = (item) => {
    props.fetchProductsbyColor(item);
  };

    const [checkedState, setCheckedState] = useState(
      new Array(categoryName.length).fill(false)
    );

    const [checkedState1, setCheckedState1] = useState(
      new Array(Brand.length).fill(false)
    );

    const [checkedState2, setCheckedState2] = useState(
      new Array(Color.length).fill(false)
    );

    const[checked, setChecked] = useState(checkedState)
    const[checked1, setChecked1] = useState(checkedState1)
    const[checked2, setChecked2] = useState(checkedState2)
  
    const handleOnChange = (position) => {
      // console.log(position)
      // const updatedCheckedState = checkedState.map((item, index) =>
      //   index === position ? !item : item
      // );


      const updatedCheckedState = checkedState.map((item, index) => {
        if (index === position) {
          return !item;
        } else {
          return item;
        }
      });
      
      console.log(updatedCheckedState)
      setChecked(updatedCheckedState)
      setCheckedState(new Array(categoryName.length).fill(false))
    }

    const handleOnChange1 = (position) => {
      const updatedCheckedState1 = checkedState1.map((item, index) =>
        index === position ? !item : item
      );
      console.log(updatedCheckedState1)
      setChecked1(updatedCheckedState1)
      setCheckedState1(new Array(Brand.length).fill(false))
    }

    const handleOnChange2 = (position) => {
      const updatedCheckedState2 = checkedState2.map((item, index) =>
        index === position ? !item : item
      );
      console.log(updatedCheckedState2)
      setChecked2(updatedCheckedState2)
      setCheckedState2(new Array(Color.length).fill(false))
    }


  return (
    <div>
      <div className="container-fluid mt-5 margin">
        {/* <div className="position-relative"></div> */}
        
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-3 col-4 shadow">
            <label className="fw-bold mt-3 mb-1 text-center">FILTERS</label>
            <hr></hr>
            <label className="mb-2 fw-bold">Categories</label>
            {categoryName.map((item, index) => (
              <div key={index}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    // name={`hello${item.id}`}
                    value=""
                    id="flexCheckDefault"
                    checked={checked[index]}
                    onChange={() => handleOnChange(index)}
                    onClick={() => {
                      handleClick(item);
                    }}
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    {item}
                  </label>
                </div>
              </div>
            ))}
            <hr></hr>

            <label className="mb-2 fw-bold">Brand</label>
            {Brand.map((item, index) => (
              <div key={index}>
                <div className="form-check">
                  <input
                  name={`hey${item.id}`}
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked={checked1[index]}
                    onChange={() => handleOnChange1(index)}
                    onClick={() => {
                      handleBrand(item);
                    }}
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    {item}
                  </label>
                </div>
              </div>
            ))}
            <hr></hr>

            <label className="mb-2 fw-bold">Color</label>
            {Color.map((item, index) => (
              <div key={index}>
                <div className="form-check">
                  <input
                  name={`hi${item.id}`}
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked={checked2[index]}
                    onChange={() => handleOnChange2(index)}
                    onClick={() => {
                      handleColor(item);
                    }}
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    {item}
                  </label>
                </div>
              </div>
            ))}
            <hr></hr>

          </div>

          <div className="col-lg-10 col-md-9 col-sm-9 col-8 positioning color"> 
          
          {/* U CAN give color cls to give the background color */}
            <SingeProductShow />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapToStateProps = (state) => {
  return {
    products: state.allProducts,
  };
};

export default connect(mapToStateProps, { fetchProductsByCat, fetchProductsbybrand, fetchProductsbyColor})(About);
