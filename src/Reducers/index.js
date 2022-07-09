// create reducers

import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { UPDATE_FORM_STATE } from "../Actions";

const initialProduct = {
  Cart: [],
  numberCart: 0,
  products: [],
};

const initialWishlist = {
  Wishlist: [],
  numberWishlist: 0,
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

const allCouponsReducer = (state = [], action) => {
  if (action.type === "FETCH_COUPON") {
    return action.payload;
  }
  if (action.type === "FETCH_COUPON_BY_ID") {
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
  if (action.type === "FETCH_PRODUCTS_BY_BRAND") {
    return action.payload;
  }
  if (action.type === "FETCH_PRODUCTS_BY_COLOR") {
    return action.payload;
  }
 
  return state;
};

function todoProduct(state = initialProduct, action) {
  switch (action.type) {
    case "GET_NUMBER_CART":
      return {
        ...state,
      };
    case "ADD_CART":
      if (state.numberCart === 0) {
        let carts = {
          id: action.payload.id,
          quantity: 1,
          productname: action.payload.productname,
          image: action.payload.image,
          price: action.payload.price,
          color: action.payload.color,
          brand: action.payload.brand,
        };
        state.Cart.push(carts);
      } else {
        let check = false;
        state.Cart.map((item, key) => {
          if (item.id === action.payload.id) {
            state.Cart[key].quantity++;
            check = true;
          }
        });

        if (!check) {
          let cart = {
            id: action.payload.id,
            quantity: 1,
            productname: action.payload.productname,
            image: action.payload.image,
            price: action.payload.price,
            color: action.payload.color,
            brand: action.payload.brand,
          };
          state.Cart.push(cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case "INCREASE_QUANTITY":
      state.numberCart++;
      state.Cart[action.payload].quantity++;

      return {
        ...state,
      };

    case "DECREASE_QUANTITY":
      state.numberCart--;
      state.Cart[action.payload].quantity--;

      return {
        ...state,
      };

    case "DELETE_CART":
      let quantity = state.Cart[action.payload].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity,
        Cart: state.Cart.filter((item) => {
          return item.id !== state.Cart[action.payload].id;
        }),
      };
    default:
      return state;
  }
}

function todoWishlist(state = initialWishlist, action) {
  switch (action.type) {
    case "GET_NUMBER_WISHLIST":
      return {
        ...state,
      };
    case "ADD_WISHLIST":
      if (state.numberWishlist === 0) {
        let wishlist = {
          id: action.payload.id,
          quantity: 1,
          productname: action.payload.productname,
          image: action.payload.image,
          price: action.payload.price,
          color: action.payload.color,
          brand: action.payload.brand,
        };
        state.Wishlist.push(wishlist);
      } else {
        let check = false;
        state.Wishlist.map((item, key) => {
          if (item.id === action.payload.id) {
            state.Wishlist[key].quantity++;
            check = true;
          }
        });

        if (!check) {
          let wishlist = {
            id: action.payload.id,
            quantity: 1,
            productname: action.payload.productname,
            image: action.payload.image,
            price: action.payload.price,
            color: action.payload.color,
            brand: action.payload.brand,
          };
          state.Wishlist.push(wishlist);
        }
      }
      return {
        ...state,
        numberWishlist: state.numberWishlist + 1,
      };

    case "DELETE_WISHED_PRODUCT":
      let quantity = state.Wishlist[action.payload].quantity;
      return {
        ...state,
        numberWishlist: state.numberWishlist - quantity,
        Wishlist: state.Wishlist.filter((item) => {
          return item.id !== state.Wishlist[action.payload].id;
        }),
      };
    default:
      return state;
  }
}



const reducers = combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
  auth: authReducer,
  userData: fetchUserReducer,
  finalForm: finalFormReducer,
  allCategory: allCategoryReducer,
  allProducts: allProductsReducer,
  todoProduct: todoProduct,
  todoWishlist: todoWishlist,
  allCoupons: allCouponsReducer,
});

export default reducers;
