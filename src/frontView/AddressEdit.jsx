import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { fetchLoginUser } from "../Actions/index";
import axios from "axios";

function AddressEdit({ item, userData, fetchLoginUser }) {
  const [data, setData] = useState(item);
  fetchLoginUser();
  
const[user, setUser] = useState(userData)
console.log(user);

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onsave = async (e) => {
    e.preventDefault();
    
    setUser((prev)=>({
      ...prev,
      addressData: [...prev.addressData, data]
    }))

    console.log(userData)
    var response = await axios({
      method: "PUT",
      url: "http://localhost:5000/user/1",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        user: user,
      },
    });
    alert("Address saved");

  };
  console.log(user)

  return (
    <div>
      <div
        type="button"
        className="btn border button ms-3 px-2"
        data-bs-toggle="modal"
        data-bs-target={`#exampleModal${item.id}`}
        data-bs-whatever="@edit"
      >
        Edit
      </div>

      <div
        className="modal fade"
        id={`exampleModal${item.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                EDIT ADDRESS
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onsave} className="form p-5 shadow">
                <div className="form-group mt-3">
                  <label className="form-label fw-bold">Contact Details</label>
                  <input
                    name="contact"
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={data.contact}
                    onChange={handlechange}
                  />
                  <input
                    name="mobile"
                    type="text"
                    placeholder="Mobile no"
                    className="form-control mt-2"
                    value={data.mobile}
                    onChange={handlechange}
                  />
                </div>

                <div className="form-group mt-3">
                  <label className="form-label fw-bold">Address</label>
                  <input
                    name="pincode"
                    type="text"
                    placeholder="Pincode"
                    className="form-control mt-2"
                    value={data.pincode}
                    onChange={handlechange}
                  />

                  <input
                    name="address"
                    type="text"
                    placeholder="Address(House no, Building street area)"
                    className="form-control mt-2"
                    value={data.address}
                    onChange={handlechange}
                  />

                  <input
                    name="location"
                    type="text"
                    placeholder="Location"
                    className="form-control mt-2"
                    value={data.location}
                    onChange={handlechange}
                  />
                </div>

                <div className="buttons mt-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
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
    userData: state.userData,
  };
};

export default connect(mapStateToProps, {
  fetchLoginUser,
})(AddressEdit);
