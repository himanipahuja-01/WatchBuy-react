import React from "react";
import { connect } from "react-redux";
import { fetchCoupon, fetchCouponById } from "../Actions/index";
import { useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { useState } from "react";

 
  function ShowCoupon({ fetchCoupon, allCoupons ,fetchCouponById, fetchCouponId}) {
  useEffect(() => {
    fetchCoupon();
  }, []);

  //   console.log(allCoupons);

  const [show, setShow] = useState("white");

  const styling = {
    backgroundColor: show,
  };

  const styled = (id) => {
    setShow("#d63031");
    console.log(id)
  // fetchCouponById(id)  
  };

  

  return (
    <div>
      <div
        type="button"
        className="btn border button px-2 me-4"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal4"
        data-bs-whatever="@edit"
      >
        Apply
      </div>

      <div
        className="modal fade"
        id="exampleModal4"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                APPLY COUPON
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="w-100 h-auto">
                <div className="card-header">
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control rounded"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <button type="button" className="btn btn-outline-danger">
                      Check
                    </button>
                  </div>
                </div>
                {allCoupons.map((item) => {
                  return (
                    <>
                      <div
                        className="border mt-3 px-3 heights"
                        onClick={() => {
                          styled(item.id);
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <div
                            className="form-check p-0 border border-danger m-1 sizes d-flex align-items-center"
                            style={styling}
                          >
                            <TiTick className="fs-2 ms-auto text-white" />
                          </div>
                          <div>
                            <label className="form-check-label card-title text-danger fs-3">
                              {item.couponName}
                            </label>
                          </div>
                        </div>
                        {/* <h5 className="card-title text-danger">
                          {item.couponName}
                        </h5> */}
                        <p className="card-text m-1">{item.save}</p>
                        <p className="card-text m-1">{item.price}</p>
                        <p className="card-text m-1">
                          {item.dateStart} {item.dateEnd}
                        </p>
                      </div>
                    </>
                  );
                })}

                <div className="card-footer mt-3">
                  <p>maximum savings : </p>
                  {/* <p>Rs.{item.save}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default AddressEdit;
const mapStateToProps = (state) => {
  //  console.log(state)
  return {
    allCoupons: state.allCoupons,
  };
};

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchCouponId: (id) => dispatch(fetchCouponById(id)),
//   };
// }

export default connect( mapStateToProps, {
  fetchCoupon,fetchCouponById
})(ShowCoupon);
