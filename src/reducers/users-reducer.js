import { usersAPI } from "../api/api";

const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case SET_USERS: {
            return { ...state, users: action.users };
        }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount,
            };
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                }),
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id != action.userId),
            };
        }
        default:
            return state;
    }
};

export const toogleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toogleFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(toogleFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        });
    };
};

export const follow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId).then((data) => {
        if (data.resultCode == 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
};

export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollow(userId).then((data) => {
        if (data.resultCode == 0) {
            dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
};

export default usersReducer;
