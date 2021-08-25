import React from "react";

import styles from "./Profile.module.sass";

import ProfileInfo from "../profile-info";
import Posts from "../posts";

const Profile = ({ profilePage, addPost, inputPostText }) => {
    return (
        <div>
            <ProfileInfo />
            <Posts profilePage={profilePage} addPost={addPost} inputPostText={inputPostText} />
        </div>
    );
};

export default Profile;
