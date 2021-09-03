import React, { Component } from "react";
import * as axios from "axios";

import styles from "./Users.module.sass";
import userIcon from "../../assets/userIcon.png";

class UsersClass extends Component {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    }

    changeCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    };

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={styles.usersList}>
                <div className={styles.usersPagination}>
                    {pages.map((page) => (
                        <span
                            className={page === this.props.currentPage && styles.selected}
                            onClick={() => {
                                this.changeCurrentPage(page);
                            }}
                        >
                            {page}
                        </span>
                    ))}
                </div>
                {this.props.users.map((user) => {
                    return (
                        <div className={styles.usersItem}>
                            <div>
                                <p>
                                    <img
                                        src={user.photos.small ? user.photos.small : userIcon}
                                        alt="avatar"
                                        className={styles.usersItemPhoto}
                                    />
                                </p>
                                <p>
                                    {user.followed ? (
                                        <button onClick={() => this.props.unfollow(user.id)}>unfollow</button>
                                    ) : (
                                        <button onClick={() => this.props.follow(user.id)}>follow</button>
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
    }
}

export default UsersClass;
