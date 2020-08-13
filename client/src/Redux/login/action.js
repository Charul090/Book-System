import { SEND_LOGIN, LOGIN_SUCCESSFULL, LOGIN_FAILED,LOGOUT } from "./actiontypes.js"
import axios from "axios"

const SEND_LOGIN_DETAILS = () => {
    return {
        type: SEND_LOGIN
    }
}

const LOGIN_SUCCESS = (payload) => {
    return {
        type: LOGIN_SUCCESSFULL,
        payload
    }
}

const LOGIN_FAILURE = (payload) => {
    return {
        type: LOGIN_FAILED,
        payload
    }
}

const Logout = ()=>{
    return {
        type:LOGOUT
    }
}

const Start_Login = (data) => {
    return dispatch => {
        dispatch(SEND_LOGIN_DETAILS())
        axios({
            method: "POST",
            baseURL: "http://127.0.0.1:5000",
            url: "/user/login",
            data: data
        })
            .then((item) => item.data)
            .then((data) => {
                if(data["error"]){
                    dispatch(LOGIN_FAILURE(data))
                }
                else{
                    dispatch(LOGIN_SUCCESS(data))
                }
            })
    }
}

export { Start_Login,Logout }