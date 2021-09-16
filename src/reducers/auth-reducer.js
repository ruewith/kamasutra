import { authAPI } from "../api/api";
const SET_AUTH_DATA = "SET_AUTH_DATA";

let initialState = {
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
    authAPI.me().then((data) => {
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
