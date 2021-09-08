import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
    toogleFetching,
    setUsers,
    setCurrentPage,
    setTotalCount,
    follow,
    unfollow,
    setFollowingProgress,
} from "../../reducers/users-reducer";

import Preloader from "../preloader";
import Users from "./Users";

import { usersAPI } from "../api/api";

class UsersContainer extends Component {
    componentDidMount() {
        this.props.toogleFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            this.props.toogleFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
        });
    }

    changeCurrentPage = (page) => {
        this.props.toogleFetching(true);
        this.props.setCurrentPage(page);
        usersAPI.getUsers(page, this.props.pageSize).then((data) => {
            this.props.setUsers(data.items);
            this.props.toogleFetching(false);
        });
    };

    render() {
        const {
            isFetching,
            totalCount,
            pageSize,
            currentPage,
            users,
            follow,
            unfollow,
            followingInProgress,
            setFollowingProgress,
        } = this.props;

        return (
            <>
                {isFetching ? (
                    <Preloader />
                ) : (
                    <Users
                        isFetching={isFetching}
                        totalCount={totalCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        changeCurrentPage={this.changeCurrentPage}
                        users={users}
                        follow={follow}
                        unfollow={unfollow}
                        followingInProgress={followingInProgress}
                        setFollowingProgress={setFollowingProgress}
                    />
                )}
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

export default connect(mapStateToProps, {
    toogleFetching,
    setUsers,
    setCurrentPage,
    setTotalCount,
    follow,
    unfollow,
    setFollowingProgress,
})(UsersContainer);
