import React from "react";

import styles from "./Profile.module.sass";
import userIcon from "../../assets/img/userIcon.png";

const ProfileAvatar = ({ photos, savePhoto, isOwner }) => {
    const profilePhotoHandler = (event) => {
        debugger;
        if (event.target.files.length) {
            savePhoto(event.target.files[0]);
        }
    };
    return (
        <div className={styles.profileAvatar}>
            <div>
                <img src={photos.large || userIcon} alt="profile avatar" />
            </div>
            {isOwner && (
                <div>
                    <input type={"file"} onChange={profilePhotoHandler} />
                </div>
            )}
        </div>
    );
};

export default ProfileAvatar;
