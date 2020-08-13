import { GET_DATA, DATA_SUCCESSFULL, DATA_FAILED } from "./actiontypes.js"
import axios from "axios"

const SEND_DATA_DETAILS = () => {
    return {
        type: GET_DATA
    }
}

const DATA_SUCCESS = (payload) => {
    return {
        type: DATA_SUCCESSFULL,
        payload
    }
}

const DATA_FAILURE = (payload) => {
    return {
        type: DATA_FAILED,
        payload
    }
}

const Start_Data = (data) => {
    return dispatch => {
        dispatch(SEND_DATA_DETAILS())
        axios({
            method: "GET",
            baseURL: "http://127.0.0.1:5000",
            url: "/book/get",
            headers:{
                "Authorization":data
            }
        })
            .then((item) => item.data)
            .then((data) => {
                if(data["error"]){
                    dispatch(DATA_FAILURE(data))
                }
                else{
                    dispatch(DATA_SUCCESS(data))
                }
            })
    }
}

export { Start_Data }