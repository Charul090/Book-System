import { GET_DATA, DATA_SUCCESSFULL, DATA_FAILED } from "./actiontypes.js"

const initialState = {
    data:[],
    fail:false,
    message:"",
    page:1,
    total_pages:null,
    category:[]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_DATA:
        return { ...state }

    case DATA_SUCCESSFULL:
        return {
            ...state,
            failed:false,
            page:payload.page,
            total_pages:payload.total_pages,
            data:[...payload.data],
            category:payload.category
        }

    case DATA_FAILED:
        return{
            ...state,
            ...initialState,
            message:payload.message
        }
    
    default:
        return state
    }
}
