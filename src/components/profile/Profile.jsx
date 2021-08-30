import React from "react";

import styles from "./Profile.module.sass";

import ProfileInfo from "../profile-info";
import Posts, { PostsContainer } from "../posts";

const Profile = ({ store }) => {
    return (
        <div>
            <ProfileInfo />
            <PostsContainer store={store} />
        </div>
    );
};

export default Profile;
