import React from "react";

import styles from "./Posts.module.sass";

import PostItem from "../post-item";

const Posts = (props) => {
    const { posts, addPost } = props;
    const postElements = posts.map((post) => <PostItem state={post} />);

    const newPostElement = React.createRef();

    const addNewPost = () => {
        const text = newPostElement.current.value;
        addPost(text);
        console.log(text);
    };

    return (
        <div className={styles.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button> <button>Remove</button>
                </div>
            </div>
            <div className={styles.postBlock}>{postElements}</div>
        </div>
    );
};

export default Posts;
