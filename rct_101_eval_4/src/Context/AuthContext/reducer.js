// reducer related to auth state;

import { GET_DATA, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCESS } from "./action"

const reducer = (state, {type, payload}) => {
  switch(type){
    case LOGIN_REQUEST:
        return {...state, isLoading : true}
    case LOGIN_SUCESS:
        return {...state, isLoading : false, token : payload, authStatus:true}
    case LOGIN_FAILURE:
        return {...state, isLoading : false, isError : true, authStatus:false}
    case GET_DATA:
        return {...state, isError : false, data : payload, isLoading:false}
    default:
        return state
  }
}

export default reducer