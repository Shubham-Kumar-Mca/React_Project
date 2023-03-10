// action creators related to cart state;

export const GET_ADD_TO_CART = "GET_ADD_TO_CART";
export const GET_REMOVE_TO_CART = "GET_REMOVE_TO_CART";
export const GET_CHECK_OUT = "GET_CHECK_OUT";
export const GET_STATUS = "GET_STATUS"

export const AddToCart = (payload) => ({ type: GET_ADD_TO_CART, payload });
export const RemoveTocart = (payload) => ({ type: GET_REMOVE_TO_CART, payload });
export const CheckOut = () => ({ type: GET_CHECK_OUT })
export const UpdateStatus = (payload) => ({ type: GET_STATUS, payload });