import React from 'react';
import SingeProductShow from "./SingeProductShow";
// import ProductDescription from "./ProductDescription";

function About(props) {
    return (
        <div>
             <SingeProductShow item= "watches" />
             <SingeProductShow item= "watches" />
             <SingeProductShow item= "watches" />
             

             {/* <ProductDescription/> */}
        </div>
    );
}

export default About;