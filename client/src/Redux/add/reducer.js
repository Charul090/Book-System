import { SEND_ADD, ADD_SUCCESSFULL, ADD_FAILED ,RESET_ADD} from "./actiontypes.js"

const initialState = {
    fail:false,
    message:"",
    update:false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SEND_ADD:
        return { 
            ...state 
        }

    case ADD_SUCCESSFULL:
        return {
            ...state,
            failed:false,
            message:payload.message,
            update:true
        }

    case ADD_FAILED:
        return{
            ...state,
            failed:true,
            message:payload.message
        }
    case RESET_ADD:
        return {
            ...state,
            ...initialState
        }
    default:
        return state
    }
}
