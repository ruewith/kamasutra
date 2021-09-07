import React from "react";

import styles from "./ProfileInfo.module.sass";

import Preloader from "../preloader";

const ProfileInfo = ({ profile }) => {
    if (!profile) {
        return <Preloader />;
    }

    debugger;

    return (
        <div>
            <div>
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb" />
            </div>
            <div className={styles.profileDescription}>
                <img src={profile.photos.large} alt="profile avatar" />
            </div>
        </div>
    );
};

export default ProfileInfo;
