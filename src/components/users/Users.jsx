import React from "react";

import styles from "./Users.module.sass";

import UserItem from "./UserItem";

const Users = (props) => {
    const { users, follow, unfollow, followingInProgress } = props;

    return (
        <div className={styles.usersList}>
            {users.map((user) => {
                return (
                    <UserItem
                        user={user}
                        follow={follow}
                        unfollow={unfollow}
                        followingInProgress={followingInProgress}
                    />
                );
            })}
        </div>
    );
};

export default Users;
