import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

const initialState = {
    posts: [
        { id: 1, text: "First post", likesCount: 12 },
        { id: 2, text: "Second post", likesCount: 11 },
        { id: 3, text: "Third post", likesCount: 11 },
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 4, text: action.postText, likesCount: 0 }],
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.postId),
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        default:
            return state;
    }
};

export const addPost = (postText) => ({ type: ADD_POST, postText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getUserProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export default profileReducer;
