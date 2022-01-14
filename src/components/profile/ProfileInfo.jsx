import React from "react";

import styles from "./Profile.module.sass";
import userIcon from "../../assets/img/userIcon.png";

import Preloader from "../common/preloader";
import ProfileStatus from "./ProfileStatusHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div className={styles.profileDescription}>
                <p>
                    <img className={styles.profileAvatar} src={profile.photos.large || userIcon} alt="profile avatar" />
                </p>
                <ProfileStatus status={status} updateStatus={updateStatus} />
            </div>
        </div>
    );
};

export default ProfileInfo;
