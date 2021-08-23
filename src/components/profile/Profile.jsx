import React from "react";

import styles from "./Profile.module.sass";

import ProfileInfo from "../profile-info";
import Posts from "../posts";

const Profile = (props) => {
    const { posts } = props.state;
    const { addPost } = props;

    return (
        <div>
            <ProfileInfo />
            <Posts posts={posts} addPost={addPost} />
        </div>
    );
};

export default Profile;
