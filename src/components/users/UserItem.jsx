import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Users.module.sass";
import userIcon from "../../assets/img/userIcon.png";

const UserItem = ({ user, follow, unfollow, followingInProgress }) => {
    return (
        <div className={styles.userItem}>
            <div>
                <div className={styles.userItemAva}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img
                            src={user.photos.small ? user.photos.small : userIcon}
                            alt="avatar"
                            className={styles.userItemPhoto}
                        />
                    </NavLink>
                    <div className={styles.userItemFollow}>
                        {user.followed ? (
                            <button
                                disabled={followingInProgress.some((id) => id === user.id)}
                                onClick={() => unfollow(user.id)}
                            >
                                unfollow
                            </button>
                        ) : (
                            <button
                                disabled={followingInProgress.some((id) => id === user.id)}
                                onClick={() => follow(user.id)}
                            >
                                follow
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.userItemInfo}>
                <h2>{user.name}</h2>
                <p>{user.status}</p>
            </div>
        </div>
    );
};

export default UserItem;
