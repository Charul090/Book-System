import { SEND_ADD, ADD_SUCCESSFULL, ADD_FAILED ,RESET_ADD} from "./actiontypes.js"
import axios from "axios"

const SEND_ADD_DETAILS = () => {
    return {
        type: SEND_ADD
    }
}

const ADD_SUCCESS = (payload) => {
    return {
        type: ADD_SUCCESSFULL,
        payload
    }
}

const ADD_FAILURE = (payload) => {
    return {
        type: ADD_FAILED,
        payload
    }
}

const RESET_ADDITION = ()=>{
    return {
        type:RESET_ADD
    }
}


const Start_Add = (data,token) => {
    return dispatch => {
        dispatch(SEND_ADD_DETAILS())
        axios({
            method: "POST",
            baseURL: "http://127.0.0.1:5000",
            url: "/book/add",
            data: data,
            headers:{
                "Authorization":token
            }
        })
            .then((item) => item.data)
            .then((data) => {
                if(data["error"]){
                    dispatch(ADD_FAILURE(data))
                }
                else{
                    dispatch(ADD_SUCCESS(data))
                }
            })
    }
}

export { Start_Add ,RESET_ADDITION}