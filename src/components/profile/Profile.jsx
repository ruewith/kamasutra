import React from "react";

import styles from "./Profile.module.sass";

import ProfileInfo from "../profile-info";
import Posts, { PostsContainer } from "../posts";

const Profile = (props) => {
    const { store, profile } = props;
    return (
        <div>
            <ProfileInfo profile={profile} />
            <PostsContainer store={store} />
        </div>
    );
};

export default Profile;
