import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const DELETE_POST = "DELETE_POST";

const initialState = {
    posts: [
        // { id: 1, text: "First post", likesCount: 12 },
        // { id: 2, text: "Second post", likesCount: 11 },
        // { id: 3, text: "Third post", likesCount: 11 },
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 4, text: action.payload, likesCount: 0 }],
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.postId),
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.payload,
            };
        case SET_STATUS: {
            return {
                ...state,
                status: action.payload,
            };
        }
        case SAVE_PHOTO_SUCCESS:
            return { ...state, profile: { ...state.profile, photos: action.payload } };
        default:
            return state;
    }
};

export const addPost = (postText) => ({ type: ADD_POST, payload: postText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, payload: profile });
export const setStatus = (status) => ({ type: SET_STATUS, payload: status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, payload: photos });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const editProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.editProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;
