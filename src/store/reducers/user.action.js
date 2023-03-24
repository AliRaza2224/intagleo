import * as types from "../action.type";

const initialState = {
    userLogin: null,
    isLoading: false,
    isLogedin: false,
    error: null
}

const AuthReducer = (state = initialState, action) => {
    console.log("state ------------------------>", state)
    switch (action.type) {
        case types.LOGIN_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            };
        }
        case types.LOGIN_ERROR: {
            return {
                ...state,
                error: action.payload,
            };
        }
        case types.LOGEDIN_USER: {
            return {
                ...state,
                isLogedin: action.payload,
            };
        }
        case types.LOGIN_USER: {
            return {
                ...state,
                userLogin: action.payload,
            };
        }

        default:
            return state;
    }
}

export default AuthReducer;