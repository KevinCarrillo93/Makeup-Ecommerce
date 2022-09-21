import { GET_PRODUCTS, SORT_PRODUCTS, GET_PRODUCT_ID, GET_PRODUCT_TYPE } from "./actionTypes";
import axios from 'axios';



export const getProducts = () => {
    return async (dispatch) => {
        return await axios.get('http://localhost:3001/products')
        .then(products => dispatch({type: GET_PRODUCTS, payload: products.data}))
        .catch(error => dispatch({tupe: GET_PRODUCTS, payload: error}))
    }
}

export const sortProducts = (sort) => {
    return async dispatch => {
        return dispatch({type: SORT_PRODUCTS, payload: sort})
    }
}

export const getProductById = (id) => {
    return async function (dispatch) {
        try {
            let getProductId = await axios(`http://localhost:3001/products/${id}`)
            return dispatch({
                type: GET_PRODUCT_ID,
                payload: getProductId.data
            })
        }
        catch (error){
            console.log(error)
        }
    }
}

export const getProductType = (type) => {
    return async function (dispatch){
        try {

           return dispatch({
                type: GET_PRODUCT_TYPE,
                payload: type
           })
        }
        catch (error){
            console.log(error)
        }
    }



}

