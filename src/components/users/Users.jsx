import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Users.module.sass";
import userIcon from "../../assets/userIcon.png";

const Users = (props) => {
    const { totalCount, pageSize, currentPage, changeCurrentPage, users, follow, unfollow, followingInProgress } =
        props;

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
            })}
        </div>
    );
};

export default Users;
