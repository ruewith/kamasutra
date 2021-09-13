import React from "react";

import styles from "./Profile.module.sass";

import ProfileInfo from "./ProfileInfo";
import { PostsContainer } from "../posts";

const Profile = ({ store, profile, status, updateStatus }) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
            <PostsContainer store={store} />
        </div>
    );
};

export default Profile;
