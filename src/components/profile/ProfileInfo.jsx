import React from "react";

import styles from "./Profile.module.sass";
import userIcon from "../../assets/userIcon.png";

import Preloader from "../preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ profile }) => {
    if (!profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div className={styles.profileDescription}>
                <p>
                    <img className={styles.profileAvatar} src={profile.photos.large || userIcon} alt="profile avatar" />
                </p>
                <ProfileStatus status="test" />
                <p>{profile.aboutMe}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;
