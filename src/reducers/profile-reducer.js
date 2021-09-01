const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const ADD_POST = "ADD-POST";

const initialState = {
    posts: [
        { id: 1, text: "First post", likesCount: 12 },
        { id: 2, text: "Second post", likesCount: 11 },
        { id: 3, text: "Third post", likesCount: 11 },
    ],
    postText: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_POST_TEXT:
            return {
                ...state,
                postText: action.text,
            };
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 4, text: state.postText, likesCount: 0 }],
                postText: "",
            };
        default:
            return state;
    }
};

export default profileReducer;

export const addPostAC = () => ({ type: ADD_POST });
export const updatePostTextAC = (text) => ({ type: UPDATE_POST_TEXT, text });
