import React from "react";

import styles from "./Users.module.sass";

import UserItem from "./UserItem";
import Pagination from "../common/pagination/Pagination";

const Users = (props) => {
    const { totalCount, pageSize, currentPage, changeCurrentPage, users, follow, unfollow, followingInProgress } =
        props;

    return (
        <div className={styles.usersList}>
            <Pagination
                totalCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                changeCurrentPage={changeCurrentPage}
            />
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
