import {
  GET_PRODUCTS,
  SORT_PRODUCTS,
  GET_PRODUCT_ID,
  GET_PRODUCT_BY_NAME,
  FILTER_BRANDS,
  GET_HOME_PRODUCTS,
  RESET_DETAIL,
} from "./actionTypes";
import axios from "axios";

export const getProducts = () => {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:3001/products")
      .then((products) =>
        dispatch({ type: GET_PRODUCTS, payload: products.data })
      )
      .catch((error) => dispatch({ tupe: GET_PRODUCTS, payload: error }));
  };
};

export const getHomeProducts = () => {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:3001/products")
      .then((products) =>
        dispatch({ type: GET_HOME_PRODUCTS, payload: products.data })
      )
      .catch((error) => dispatch({ tupe: GET_HOME_PRODUCTS, payload: error }));
  };
};

export const getProductById = (id) => {
  return async function (dispatch) {
    try {
      let getProductId = await axios(`http://localhost:3001/products/${id}`);
      return dispatch({
        type: GET_PRODUCT_ID,
        payload: getProductId.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const resetDetail = (payload) => {
  return async (dispatch) => {
    return dispatch({ type: RESET_DETAIL, payload });
  };
};

export const getProductByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "http://localhost:3001/products?name=" + name
      );
      return dispatch({
        type: GET_PRODUCT_BY_NAME,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

// ----- FILTERS -----
export const filterBrands = (brand) => {
  return async (dispatch) => {
    return dispatch({ type: FILTER_BRANDS, payload: brand });
  };
};

export const sortProducts = (sort) => {
  return async (dispatch) => {
    return dispatch({ type: SORT_PRODUCTS, payload: sort });
  };
};
