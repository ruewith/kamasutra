import React, { Component } from "react";

import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from "../../reducers/users-reducer";

import Preloader from "../preloader";
import Users from "./Users";

class UsersContainer extends Component {
    componentDidMount() {
        const { currentPage, pageSize, getUsers } = this.props;
        getUsers(currentPage, pageSize);
    }

    changeCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize);
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
            toggleFollowingProgress,
        } = this.props;

        return (
            <>
                {isFetching ? (
                    <Preloader />
                ) : (
                    <Users
                        totalCount={totalCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        changeCurrentPage={this.changeCurrentPage}
                        users={users}
                        follow={follow}
                        unfollow={unfollow}
                        followingInProgress={followingInProgress}
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
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
})(UsersContainer);
