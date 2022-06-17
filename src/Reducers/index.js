// create reducers

import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { UPDATE_FORM_STATE } from "../Actions";

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

// const initialstate = {items:[], filteredItems:[], size: ''}
// const allProductsReducer = (state=initialstate, action)=>{
//   switch(action.type){
//     case "FETCH_PRODUCTS":
//      return {...state, items: action.payload};
//      case "FETCH_PRODUCTS_BY_BRAND":
//      return {...state, filteredItems: action.payload.items, Brand: action.payload.Brand};
//       default: return state;
//   }
// }

const reducers = combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
  auth: authReducer,
  userData: fetchUserReducer,
  finalForm: finalFormReducer,
  allCategory: allCategoryReducer,
  allProducts: allProductsReducer,
});

export default reducers;
