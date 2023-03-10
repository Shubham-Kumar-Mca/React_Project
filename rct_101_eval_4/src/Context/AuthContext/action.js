// action creators related to auth state;

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCESS = "LOGIN_SUCESS";
export const LOGIN_FAILURE = "LOGIN_FALIURE";
export const GET_DATA = "GET_DATA"

export const getRequest = () => ({ type: LOGIN_REQUEST });
export const loginSucess = (payload) => ({ type: LOGIN_SUCESS, payload });
export const getFailure = () => ({ type: LOGIN_FAILURE });
export const getData = (payload) =>({type : GET_DATA, payload})

