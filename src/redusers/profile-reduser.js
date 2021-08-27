const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const ADD_POST = "ADD-POST";

const profileReduser = (state, action) => {
    switch (action.type) {
        case UPDATE_POST_TEXT:
            state.newPostText = action.text;
            return state;
        case ADD_POST:
            const newPost = { id: 4, text: state.newPostText, likesCount: 0 };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;

        default:
            return state;
    }
};

export default profileReduser;
