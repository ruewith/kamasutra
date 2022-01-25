import React from "react";
import styles from "./Profile.module.sass";

const ProfileTitle = ({ fullName }) => {
    return <h2 className={styles.profileFullName}>{fullName}</h2>;
};

export default ProfileTitle;
