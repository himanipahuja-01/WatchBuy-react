import React from "react";
import { BsFillEyeFill, BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function SingleProduct(props) {

  return (
    <div>

 <div className="container mt-4">
     <div className="card">
       <div className="figure">
         <img
           src={props.image}
           className="card-img-top w-100 zoom image-fluid"
           alt="..."
         />
       </div>
       <p className="list-group p-2 text-center">
         {props.name}
       </p>
       <div className="d-inline list-group p-2">
         <p className="ms-0 btn fs-4">${props.price}</p>
         <p className="me-0 btn text-secondary fs-4">
           <del>${props.price-3}</del>
         </p>
       </div>

       <div className="d-inline">
         {/* <p className="me-auto btn">{<BsFillEyeFill />}View All</p> */}

         <Link
          to={`/ProductDescription/${props.id}`}
          className="btn btn-sm text-dark p-0"
        >
          <i className="text-primary mr-1"></i>
          <BsFillEyeFill className="h3 pe-2" style={{ color: "coral" }} />{" "}
          <span className="fw-bolder fs-6 btn-clr"> View Detail</span>
        </Link>
         {/* <p className="ms-5 btn">{<BsFillCartFill />}View All</p> */}
         <Link to="" className="btn btn-sm text-dark p-0">
          <i className="text-primary mr-1"></i>
          <BsFillCartFill className="h3 pe-2" style={{ color: "coral" }} />
          <span className="fw-bolder fs-6 btn-clr"> Add To Cart</span>
        </Link>
   </div>
 </div>
</div>
         
    </div>
  );
}

export default SingleProduct;