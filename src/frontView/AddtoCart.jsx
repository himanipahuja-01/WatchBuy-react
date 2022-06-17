import React, { Component } from "react";
import { fetchLoginUser, fetchProductsbyId } from "../Actions/index";
import { connect } from "react-redux";

class AddtoCart extends Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }

  componentDidMount() {
    this.props.fetchLoginUser(this.props.loginData);
  }

  componentDidUpdate(prevProps, prevState){

    console.log(this.props.userData);
    localStorage.setItem("userdata", JSON.stringify(this.props.userData[0]));
    var length = this.props.userData.length;

    var x;
    if (length > 0) {
     x = this.props.userData[0].addcart;
    }
    console.log(x[1])
        
    // x.map((id)=>{
    //   return(
    //     this.props.fetchProductsbyId(id)
    //   )
    // })
  
  }

  render() {
    
  console.log(this.props.products)
    return (
     
      <div>
        <header>
          <div className="shopping">
            <h3>Shopping</h3>
            {this.props.products.map((item) => {
              
              return (
                <div>
                  <h1>{item.id}</h1>
                  <h2>{item.ProductName}</h2>
                </div>
              );
            })}
          
          </div>
        </header>
      </div>
    );
  }
}

const mapToStateProps = (state) => {
  return {
    userData: state.userData,
    products: state.allProducts,
  };
};

export default connect(mapToStateProps, { fetchLoginUser, fetchProductsbyId })(AddtoCart);
