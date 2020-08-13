import { SEND_DELETE, DELETE_SUCCESSFULL, DELETE_FAILED,RESET_DEL} from "./actiontypes.js"
import axios from "axios"

const SEND_DELETE_DETAILS = () => {
    return {
        type: SEND_DELETE
    }
}

const DELETE_SUCCESS = (payload) => {
    return {
        type: DELETE_SUCCESSFULL,
        payload
    }
}

const DELETE_FAILURE = (payload) => {
    return {
        type: DELETE_FAILED,
        payload
    }
}

const RESET_DELETE=()=>{
    return {
        type:RESET_DEL
    }
}


const Start_DELETE = (data,token) => {
    return dispatch => {
        dispatch(SEND_DELETE_DETAILS())
        axios({
            method: "POST",
            baseURL: "http://127.0.0.1:5000",
            url: "/book/delete",
            data: {
                id:data
            },
            headers:{
                "Authorization":token
            }
        })
            .then((item) => item.data)
            .then((data) => {
                if(data["error"]){
                    dispatch(DELETE_FAILURE(data))
                }
                else{
                    dispatch(DELETE_SUCCESS(data))
                }
            })
    }
}

export { Start_DELETE,RESET_DELETE}