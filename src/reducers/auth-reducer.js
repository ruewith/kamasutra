import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_AUTH_DATA = "SET_AUTH_DATA";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

export const setAuthData = (id, email, login, isAuth) => ({
    type: SET_AUTH_DATA,
    payload: { id, email, login, isAuth },
});

export const getAuthUser = () => (dispatch) => {
    return authAPI.me().then((data) => {
        if (data.resultCode === 0) {
            const { id, login, email } = data.data;
            dispatch(setAuthData(id, email, login, true));
        }
    });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
        if (data.resultCode === 0) {
            dispatch(getAuthUser());
        } else {
            const message = data.messages.length > 0 ? data.messages[0] : "Some error";
            dispatch(stopSubmit("login", { _error: message }));
        }
    });
};

export const logout = () => (dispatch) => {
    authAPI.logout().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthData(null, null, null, false));
        }
    });
};

export default authReducer;
