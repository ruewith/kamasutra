import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Users.module.sass";
import userIcon from "../../assets/userIcon.png";

const UserItem = ({ user, follow, unfollow, followingInProgress }) => {
    return (
        <div className={styles.usersItem}>
            <div>
                <p>
                    <NavLink to={`/profile/${user.id}`}>
                        <img
                            src={user.photos.small ? user.photos.small : userIcon}
                            alt="avatar"
                            className={styles.usersItemPhoto}
                        />
                    </NavLink>
                </p>
                <p>
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
                </p>
            </div>
            <div>
                <p>{user.name}</p>
                <p>{user.status}</p>
            </div>
        </div>
    );
};

export default UserItem;
