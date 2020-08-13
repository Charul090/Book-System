import { SEND_LOGIN, LOGIN_SUCCESSFULL, LOGIN_FAILED, LOGOUT } from "./actiontypes.js"

const initialState = {
    login:false,
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
            login:true,
            token:payload.token,
            failed:false,
            message:payload.message
        }

    case LOGIN_FAILED:
        return{
            ...state,
            login:false,
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
