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

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_POST_TEXT:
            state.postText = action.text;
            return state;
        case ADD_POST:
            const newPost = { id: 4, text: state.postText, likesCount: 0 };
            state.posts.push(newPost);
            state.postText = "";
            return state;

        default:
            return state;
    }
};

export default profileReduser;

export const addPostAC = () => ({ type: ADD_POST });
export const updatePostTextAC = (text) => ({ type: UPDATE_POST_TEXT, text });
