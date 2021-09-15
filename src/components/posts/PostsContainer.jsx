import React from "react";
import { connect } from "react-redux";

import { addPost } from "../../reducers/profile-reducer";

import Posts from "./Posts";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        postText: state.profilePage.postText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {
            dispatch(addPost(postText));
        },
    };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
