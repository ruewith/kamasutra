import React from "react";

import styles from "./Users.module.sass";
import userIcon from "../../assets/userIcon.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    const {
        totalCount,
        pageSize,
        currentPage,
        changeCurrentPage,
        users,
        follow,
        unfollow,
        followingInProgress,
        setFollowingProgress,
    } = props;

    const pagesCount = Math.ceil(totalCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.usersList}>
            <div className={styles.usersPagination}>
                {pages.map((page) => (
                    <span
                        className={page === currentPage && styles.selected}
                        onClick={() => {
                            changeCurrentPage(page);
                        }}
                    >
                        {page}
                    </span>
                ))}
            </div>
            {users.map((user) => {
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
                                        onClick={() => {
                                            debugger;
                                            setFollowingProgress(true, user.id);
                                            axios
                                                .delete(
                                                    `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                    {
                                                        withCredentials: true,
                                                        headers: {
                                                            "API-KEY": "77b31272-2094-486b-b7d2-b66ff9739961",
                                                        },
                                                    }
                                                )
                                                .then((response) => {
                                                    if (response.data.resultCode === 0) {
                                                        unfollow(user.id);
                                                    }
                                                    setFollowingProgress(false, user.id);
                                                });
                                        }}
                                    >
                                        unfollow
                                    </button>
                                ) : (
                                    <button
                                        disabled={followingInProgress.some((id) => id === user.id)}
                                        onClick={() => {
                                            debugger;
                                            setFollowingProgress(true, user.id);
                                            axios
                                                .post(
                                                    `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                    {},
                                                    {
                                                        withCredentials: true,
                                                        headers: {
                                                            "API-KEY": "77b31272-2094-486b-b7d2-b66ff9739961",
                                                        },
                                                    }
                                                )
                                                .then((response) => {
                                                    if (response.data.resultCode === 0) {
                                                        follow(user.id);
                                                    }
                                                    setFollowingProgress(false, user.id);
                                                });
                                        }}
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
            })}
        </div>
    );
};

export default Users;
