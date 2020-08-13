import { SEND_UPDATE, UPDATE_SUCCESSFULL, UPDATE_FAILED ,RESET} from "./actiontypes.js"
import axios from "axios"

const SEND_UPDATE_DETAILS = () => {
    return {
        type: SEND_UPDATE
    }
}

const UPDATE_SUCCESS = (payload) => {
    return {
        type: UPDATE_SUCCESSFULL,
        payload
    }
}

const UPDATE_FAILURE = (payload) => {
    return {
        type: UPDATE_FAILED,
        payload
    }
}

const RESET_UPDATE = ()=>{
    return {
        type:RESET
    }
}


const Start_Update = (data,token) => {
    return dispatch => {
        dispatch(SEND_UPDATE_DETAILS())
        axios({
            method: "POST",
            baseURL: "http://127.0.0.1:5000",
            url: "/book/update",
            data: data,
            headers:{
                "Authorization":token
            }
        })
            .then((item) => item.data)
            .then((data) => {
                if(data["error"]){
                    dispatch(UPDATE_FAILURE(data))
                }
                else{
                    dispatch(UPDATE_SUCCESS(data))
                }
            })
    }
}

export { Start_Update ,RESET_UPDATE}