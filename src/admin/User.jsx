import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../Actions";

function User(props) {

    // console.log(props.user)
    useEffect(()=>{
      props.fetchUser()
    },[])
  
  return (
    <div>
      <div className="container-fluid">
        <div className="row m-2">
          <div className="col-lg-3 col-sm-4 col-2 col-md-3"></div>
          <div className="col-lg-9 col-md-9 col-sm-8 col-9">

          <table class="table table-striped table-hover border mt-4 table-danger">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>

    {props.user.map((user)=>{
        return(
            <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
          </tr>
        )
    })}
  
 
  </tbody>
</table>

          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.userData,
    };
  };
  
  export default connect(mapStateToProps, { fetchUser })(User);
