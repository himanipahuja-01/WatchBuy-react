// action creater
import axios from "axios";

export const UPDATE_FORM_STATE =
  "final-form-redux-example/finalForm/UPDATE_FORM_STATE";

export const updateFormState = (form, state) => ({
  type: UPDATE_FORM_STATE,
  form,
  payload: state,
});

// Selectors
export const getFormState = (state, form) =>
  (state && state.finalForm && state.finalForm[form]) || {};

export const selectMovie = (movie) => {
  return {
    type: "SELECT_MOVIE",
    payload: movie,
  };
};

export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get("http://localhost:5000/user");
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
};

export const fetchCategories = () => async (dispatch) => {
  const response = await axios.get("http://localhost:5000/categories");
  return dispatch({
    type: "FETCH_CATEGORIES",
    payload: response.data,
  });
};

export const fetchProducts = (categoryName) => async (dispatch) => {
  const response = await axios.get(`http://localhost:5000/products?categoryName=${categoryName}`);
  return dispatch({
    type: "FETCH_PRODUCTS",
    payload: response.data,
  });
};

// export const fetchProductsbybrand = (Brand) => async (dispatch) => {
//   return dispatch({
//     type: "FETCH_PRODUCTS_BY_BRAND",
//     payload: {
     
//     },
//   });
// };
