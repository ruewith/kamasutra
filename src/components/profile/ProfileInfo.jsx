import React from "react";

import styles from "./Profile.module.sass";
import userIcon from "../../assets/img/userIcon.png";

import { Preloader } from "../common";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
    if (!profile) {
        return <Preloader />;
    }

    const profilePhotoHandler = (event) => {
        debugger;
        if (event.target.files.length) {
            savePhoto(event.target.files[0]);
        }
    };

    return (
        <div className={styles.profileDescription}>
            <h2 className={styles.profileFullName}>{profile.fullName}</h2>
            <div className={styles.profileAvatar}>
                <img src={profile.photos.large || userIcon} alt="profile avatar" />
            </div>

            {!isOwner && <input type={"file"} onChange={profilePhotoHandler} />}

            <ProfileStatus status={status} updateStatus={updateStatus} />
        </div>
    );
};

export default ProfileInfo;
