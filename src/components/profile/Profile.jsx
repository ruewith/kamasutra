import React from "react";

import styles from "./Profile.module.sass";

import ProfileInfo from "../profile-info";
import Posts from "../posts";

const Profile = ({ profilePage, dispatch }) => {
    return (
        <div>
            <ProfileInfo />
            <Posts profilePage={profilePage} dispatch={dispatch} />
        </div>
    );
};

export default Profile;
