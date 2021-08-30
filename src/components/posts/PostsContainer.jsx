import React from "react";

import { updatePostTextAC, addPostAC } from "../../redusers/profile-reduser";

import Posts from "./Posts";

const PostsContainer = ({ store }) => {
    const state = store.getState();

    const updatePostText = (text) => {
        store.dispatch(updatePostTextAC(text));
    };

    const addPost = () => {
        store.dispatch(addPostAC());
    };

    return (
        <Posts
            updatePostText={updatePostText}
            addPost={addPost}
            posts={state.profilePage.posts}
            postText={state.profilePage.postText}
        />
    );
};

export default PostsContainer;
