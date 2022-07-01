import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAddress } from "../Actions/index";

function AddressEdit({ item, index, editData }) {
  // const [data, setData] = useState({});

  const [data, setData] = useState(editData);

  // let {id} = useParams();

  // console.log(index);
  console.log(item.id);
  console.log(editData);

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // console.log(name)
    // console.log(value)

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   address.push(addressData);
  //   var response = await axios({
  //     method: "patch",
  //     url: "http://localhost:5000/user/1",
  //     data: {
  //       addressData: address,
  //     },
  //   });
  //   alert("Address saved");
  // };

  const getUserdetails = async () => {
    // const response = await fetch(`http://localhost:5000/user/${id}`, {
    //   method: "GET",
    // });
    // console.log(response);
    // if (response.ok) {
    //   const product = await response.json();
    //   // console.log(user);
    //   setData(product);
    // }
  };

  const putUserdetails = async (data) => {
    const methods = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(
      `http://localhost:5000/user/${item.id}`,
      methods
    );

    if (response.ok) {
      alert("done");
    }
  };

  // useEffect(() => {
  //   getUserdetails();
  // }, []);

  const onsave = (e) => {
    e.preventDefault();
    // putUserdetails(data);
  };

  return (
    <div>
      {/* <div
        type="button"
        className="btn border button ms-3 px-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
        data-bs-whatever="@edit"
      >
        Edit
      </div> */}

      {/* <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      > */}
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
                <button
                  type="submit"
                  // disabled={submitting || pristine}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

// export default AddressEdit;
function mapDispatchToProps(dispatch) {
  return {
    getAddress: (item) => dispatch(getAddress(item)),
  };
}

export default connect(mapDispatchToProps, { getAddress })(AddressEdit);
