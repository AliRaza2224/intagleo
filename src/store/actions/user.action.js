import * as types from "../action.type";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from "react-router-dom";


import axios from "axios";

const BASE_URL = "http://192.168.101.57:8000";

// const { API_BASE_URL } = process.env.API_BASE_URL
export const loadingState = (isLoading) => {
    return {
        type: types.LOGIN_LOADING,
        payload: isLoading
    }
}
export const saveUser = (userLogin) => {
    return {
        type: types.LOGIN_USER,
        payload: userLogin
    }
}

export const LogedinUser = (isLogedin) => {
    return {
        type: types.LOGEDIN_USER,
        payload: isLogedin
    }
}
export const UserError = (error) => {
    return {
        type: types.LOGIN_ERROR,
        payload: error
    }
}

export const saveToken = (userToken) => {
    return {
        type: types.USER_TOKEN,
        payload: userToken
    }
}



export const userLogin = (user) => async (dispatch) => {
    dispatch(loadingState(true))
    await axios.post(`${BASE_URL}/api/signin`, user).then(function (res) {
        toast.success("Login Success")
        dispatch(loadingState(false))
        dispatch(saveUser(res.data.user))
        dispatch(saveToken(res.data.token))
        dispatch(LogedinUser(true))
    }).catch(function (err) {
        toast.error("Login Error")
        console.log(err)
        dispatch(loadingState(false))
    })
}
