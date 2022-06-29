import React from "react";
import { IncreaseQuantity, DecreaseQuantity } from "../Actions/index";
import { connect } from "react-redux";

function IncreDecre({ IncreaseQuantity, DecreaseQuantity, data , ind }) {
    // console.log(quantity)
    console.log(ind)
    console.log(data.quantity)

  return (
    <div>
      <div className="d-flex mb-4" style={{ width: "10px" }}>
        <button
          className="btn btn-primary me-2 px-3"
          style={{ height: "40px" }}
          onClick={() => DecreaseQuantity(ind)}
        >
          <i className="fas fa-minus p-0"></i>
        </button>

        <div className="form-outline" style={{ width: "50px" }}>
          <input
            id="form1"
            min="0"
            name="quantity"
            value={data.quantity}
            // type="number"
            className="form-control"
          />
          <h6 className="form-label mt-2" htmlFor="form1">
            Quantity
          </h6>
        </div>

        <button
          className="btn btn-primary px-3 ms-2"
          style={{ height: "40px" }}
          onClick={() => IncreaseQuantity(ind)}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
}

// export default IncreDecre;

const mapStateToProps = (state) => {
  //  console.log(state)
  return {
    items: state.todoProduct,
    // userData: state.userData,
    // products: state.allProducts,
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
})(IncreDecre);
