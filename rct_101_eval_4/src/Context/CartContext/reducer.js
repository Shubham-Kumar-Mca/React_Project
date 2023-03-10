// reducer related to cart state;

import { GET_ADD_TO_CART, GET_CHECK_OUT, GET_REMOVE_TO_CART, GET_STATUS } from "./action"

const cartReducer = (state, { type, payload }) => {
    switch (type) {
        case GET_ADD_TO_CART:
            const newData = [...state.addToCart, payload]
            return { ...state, addToCart: newData, checkout : false }
        case GET_REMOVE_TO_CART:
            const id = payload
            const filterData = state.addToCart.filter(el=>el.id !== id)
            const filterStatus = state.status.filter(ele=>ele !== id)
            return {...state, addToCart : filterData, status : filterStatus}
        case GET_CHECK_OUT:
            return {...state, checkout : true, addToCart : [], status : []}
        case GET_STATUS:
            return {...state, status : [...state.status, payload]}
        default:
            return state;
    }
}

export default cartReducer