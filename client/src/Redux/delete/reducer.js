import { SEND_DELETE, DELETE_SUCCESSFULL, DELETE_FAILED,RESET_DEL} from "./actiontypes.js"

const initialState = {
    fail:false,
    message:"",
    update:false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SEND_DELETE:
        return { 
            ...state 
        }

    case DELETE_SUCCESSFULL:
        return {
            ...state,
            failed:false,
            message:payload.message,
            update:true
        }

    case DELETE_FAILED:
        return{
            ...state,
            failed:true,
            message:payload.message
        }
    
    case RESET_DEL:
        return {
            ...state,
            ...initialState
        }
    default:
        return state
    }
}
