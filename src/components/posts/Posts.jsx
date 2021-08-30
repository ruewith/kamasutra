import React from "react";

import styles from "./Posts.module.sass";

import PostItem from "../post-item";

const Posts = ({ posts, postText, updatePostText, addPost }) => {
    const postElements = posts.map((post) => <PostItem state={post} />);

    return (
        <div className={styles.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        placeholder="New post"
                        onChange={(event) => updatePostText(event.target.value)}
                        value={postText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button> <button>Remove</button>
                </div>
            </div>
            <div className={styles.postBlock}>{postElements}</div>
        </div>
    );
};

export default Posts;
