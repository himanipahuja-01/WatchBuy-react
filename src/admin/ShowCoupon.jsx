import React from "react";
import { connect } from "react-redux";
import { fetchCoupon } from "../Actions/index";
import { useEffect } from "react";

function ShowCoupon({ fetchCoupon, allCoupons }) {
  useEffect(() => {
    fetchCoupon();
  }, []);

//   console.log(allCoupons);

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
              <div className="card w-100 h-auto">
                <div className="card-header">
                  <div class="input-group">
                    <input
                      type="search"
                      class="form-control rounded"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <button type="button" class="btn btn-outline-danger">
                      Check
                    </button>
                  </div>
                </div>
                {allCoupons.map((item) => {
                  return (
                    <>
                      <div className="card-body">
                      <div class="form-check">
  <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label card-title text-danger fs-3">
  {item.couponName}
  </label>
</div>
                        {/* <h5 className="card-title text-danger">
                          {item.couponName}
                        </h5> */}
                        <p className="card-text">{item.save}</p>
                        <p className="card-text">{item.price}</p>
                        <p className="card-text">
                          {item.dateStart} {item.dateEnd}
                        </p>
                        <hr />
                      </div>
                    </>
                  );
                })}

                <div className="card-footer m-0">
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

export default connect(mapStateToProps, {
  fetchCoupon,
})(ShowCoupon);
