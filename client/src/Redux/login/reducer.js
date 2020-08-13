import { SEND_LOGIN, LOGIN_SUCCESSFULL, LOGIN_FAILED, LOGOUT } from "./actiontypes.js"

const initialState = {
    logged_user:false,
    fail:false,
    message:"",
    token:""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SEND_LOGIN:
        return { ...state }

    case LOGIN_SUCCESSFULL:
        return {
            ...state,
            logged_user:true,
            token:payload.token,
            failed:false,
            message:payload.message
        }

    case LOGIN_FAILED:
        return{
            ...state,
            logged_user:false,
            token:"",
            failed:true,
            message:payload.message
        }

    case LOGOUT:
        return {
            ...state,
            ...initialState
        }
    
    default:
        return state
    }
}
