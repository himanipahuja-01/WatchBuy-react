// create reducers

import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { UPDATE_FORM_STATE } from "../Actions";

const initialProduct = {
  Cart: [],
  numberCart: 0,
  products: [],
};

const moviesReducer = () => {
  return [
    {
      title: "Iron Man",
      year: "2008",
      lead: "robert downey junior",
    },
    {
      title: "captain america",
      year: "2009",
      lead: "Chris evans",
    },
    {
      title: "thor",
      year: "2010",
      lead: "chris hemsworth",
    },
    {
      title: "hulk",
      year: "2009",
      lead: "mark ruffelo",
    },
  ];
};

const selectedMovieReducer = (selectedMovie = null, action) => {
  if (action.type === "SELECT_MOVIE") {
    return action.payload;
  }
  return selectedMovie;
};

const fetchUserReducer = (state = [], action) => {
  if (action.type === "FETCH_USER") {
    return action.payload;
  }
  if (action.type === "FETCH_PRODUCTS_ADD_CART") {
    return action.payload;
  }
  if (action.type === "FETCH_LOGIN_USER") {
    return action.payload;
  }
  return state;
};

const finalFormReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case UPDATE_FORM_STATE:
      return {
        ...state,
        [action.form]: action.payload,
      };
    default:
      return state;
  }
};

const allCategoryReducer = (state = [], action) => {
  if (action.type === "FETCH_CATEGORIES") {
    return action.payload;
  }
  return state;
};

const allProductsReducer = (state = [], action) => {
  if (action.type === "FETCH_PRODUCTS") {
    return action.payload;
  }
  if (action.type === "FETCH_PRODUCTS_BY_CAT") {
    return action.payload;
  }
  if (action.type === "FETCH_PRODUCTS_BY_ID") {
    return action.payload;
  }

  return state;
};

function todoProduct(state = initialProduct, action) {
  switch (action.type) {
      case "GET_NUMBER_CART":
        return{
          ...state
        }
        case "ADD_CART":
          if(state.numberCart == 0){
            let carts = {
              id: action.payload.id,
              quantity: 1,
              Productname:action.payload.ProductName,
              image: action.payload.image,
              price: action.payload.price
            }
            state.Cart.push(carts);
          }
          else{
            let check = false;
            state.Cart.map((item, key) =>{
              if(item.id === action.payload.id){
                state.Cart[key].quantity++;
                check = true;
              }
            })
      

          if(!check){
            let cart = {
              id: action.payload.id,
              quantity: 1,
              ProductName: action.payload.ProductName,
              image: action.payload.image,
              price: action.payload.price

            }
            state.Cart.push(cart)
          }
        }
        return{
          ...state,
          numberCart: state.numberCart+1
        }
        case "INCREASE_QUANTITY":
          state.numberCart++
          state.Cart[action.payload].quantity++;

          return{
            ...state
          }

          case "DECREASE_QUANTITY":
            state.numberCart--
            state.Cart[action.payload].quantity--;
  
            return{
              ...state
            }

          case "DELETE_CART":
            let quantity = state.Cart[action.payload].quantity;
            return{
              ...state,
              numberCart: state.numberCart - quantity,
              Cart: state.Cart.filter(item =>{
                return item.id!== state.Cart[action.payload].id
              })
            }
            default: 
            return state;
  }
}

// // const initialstate = {items:[], filteredItems:[], size: ''}
// // const allProductsReducer = (state=initialstate, action)=>{
// //   switch(action.type){
// //     case "FETCH_PRODUCTS":
// //      return {...state, items: action.payload};
// //      case "FETCH_PRODUCTS_BY_BRAND":
// //      return {...state, filteredItems: action.payload.items, Brand: action.payload.Brand};
// //       default: return state;
// //   }
// // }

const reducers = combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
  auth: authReducer,
  userData: fetchUserReducer,
  finalForm: finalFormReducer,
  allCategory: allCategoryReducer,
  allProducts: allProductsReducer,
  todoProduct: todoProduct
});

export default reducers;
