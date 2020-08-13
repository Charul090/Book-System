import { SEND_UPDATE, UPDATE_SUCCESSFULL, UPDATE_FAILED,RESET } from "./actiontypes.js"


const initialState = {
    fail:false,
    message:"",
    update:false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SEND_UPDATE:
        return { 
            ...state 
        }

    case UPDATE_SUCCESSFULL:
        return {
            ...state,
            failed:false,
            message:payload.message,
            update:true
        }

    case UPDATE_FAILED:
        return{
            ...state,
            failed:true,
            message:payload.message
        }
    case RESET:
        return {
            ...state,
            ...initialState
        }
    default:
        return state
    }
}
