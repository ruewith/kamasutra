import React from "react";
import * as axios from "axios";

import styles from "./Users.module.sass";
import userIcon from "../../assets/userIcon.png";

const Users = ({ users, follow, unfollow, setUsers }) => {
    if (users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
            setUsers(response.data.items);
        });
    }

    return (
        <div className={styles.usersList}>
            {users.map((user) => {
                return (
                    <div className={styles.usersItem}>
                        <div>
                            <p>
                                <img
                                    src={user.photos.small ? users.photos.small : userIcon}
                                    alt="avatar"
                                    className={styles.usersItemPhoto}
                                />
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
