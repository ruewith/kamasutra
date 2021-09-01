import React from "react";
import { connect } from "react-redux";

import { updatePostTextAC, addPostAC } from "../../redusers/profile-reduser";

import Posts from "./Posts";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        postText: state.profilePage.postText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => {
            dispatch(updatePostTextAC(text));
        },
        addPost: () => {
            dispatch(addPostAC());
        },
    };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
