import React from "react";

import styles from "./Users.module.sass";

const Users = ({ users, follow, unfollow }) => {
    return (
        <div className={styles.usersList}>
            {users.map((user) => {
                return (
                    <div className={styles.usersListItem}>
                        <div>
                            <p>
                                <img src={user.avaUrl} alt="avatar" />
                            </p>
                            <p>
                                {user.followed ? (
                                    <button onClick={() => unfollow(user.id)}>unfollow</button>
                                ) : (
                                    <button onClick={() => follow(user.id)}>follow</button>
                                )}
                            </p>
                        </div>
                        <div>
                            <p>{user.fullName}</p>
                            <p>{user.status}</p>
                        </div>
                        <div>
                            <p>{user.location.country}</p>
                            <p>{user.location.city}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Users;
