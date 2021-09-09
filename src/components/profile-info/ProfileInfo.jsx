import React from "react";

import styles from "./ProfileInfo.module.sass";
import userIcon from "../../assets/userIcon.png";

import Preloader from "../preloader";

const ProfileInfo = ({ profile }) => {
    if (!profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div>
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb" />
            </div>
            <div className={styles.profileDescription}>
                <p>
                    <img className={styles.profileAvatar} src={profile.photos.large || userIcon} alt="profile avatar" />
                </p>
                <p>{profile.aboutMe}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;
