const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const initialState = {
    users: [
        {
            id: 1,
            avaUrl: "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
            followed: false,
            fullName: "Name1",
            status: "status 1",
            location: { city: "City 1", country: "Country 1" },
        },
        {
            id: 2,
            avaUrl: "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
            followed: true,
            fullName: "Name2",
            status: "status 2",
            location: { city: "City 2", country: "Country 2" },
        },
        {
            id: 3,
            avaUrl: "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
            followed: false,
            fullName: "Name3",
            status: "status 3",
            location: { city: "City 3", country: "Country 3" },
        },
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] };
        }
        default:
            return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
