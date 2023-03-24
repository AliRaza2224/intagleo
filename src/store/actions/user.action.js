import * as types from "../action.type";

import axios from "axios";

const { API_BASE_URL } = process.env
export const loadingState = (isLoading) => {
    return {
        type: types.LOGIN_LOADING,
        payload: isLoading
    }
}
export const LoginUser = (userLogin) => {
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


export const userLogin = (user) => async (dispatch) => {
    console.log("user api ----------------->", user)
    dispatch(loadingState(true))
    await axios.post(`${API_BASE_URL}/api/signin`, user).then(function (res) {
        console.log(res)
        dispatch(loadingState(false))
    }).catch(function (err) {
        console.log(err)
        dispatch(loadingState(false))
    })
}
