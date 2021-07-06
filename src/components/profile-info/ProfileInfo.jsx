import React from "react";

import styles from "./ProfileInfo.module.sass";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb" />
            </div>
            <div className={styles.profileDescription}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;
