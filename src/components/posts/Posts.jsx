import React from "react";

import styles from "./Posts.module.sass";

import { updatePostTextAC, addPostAC } from "../../redusers/state";

import PostItem from "../post-item";

const Posts = ({ profilePage, dispatch }) => {
    const { posts, newPostText } = profilePage;
    const postElements = posts.map((post) => <PostItem state={post} />);

    return (
        <div className={styles.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        placeholder="New post"
                        onChange={(event) => {
                            dispatch(updatePostTextAC(event.target.value));
                        }}
                        value={newPostText}
                    />
                </div>
                <div>
                    <button onClick={() => dispatch(addPostAC())}>Add post</button> <button>Remove</button>
                </div>
            </div>
            <div className={styles.postBlock}>{postElements}</div>
        </div>
    );
};

export default Posts;
