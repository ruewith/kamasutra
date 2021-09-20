import React, { Component } from "react";
import { compose } from "redux";

import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from "../../reducers/users-reducer";
import {
    getUsers,
    getPageSize,
    getTotalCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
} from "../../selectors/users-selectors";
import withAuthRedirect from "../../hoc/withAuthRedirect";

import Preloader from "../common/preloader";
import Users from "./Users";

class UsersContainer extends Component {
    componentDidMount() {
        const { currentPage, pageSize, requestUsers } = this.props;
        requestUsers(currentPage, pageSize);
    }

    changeCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.requestUsers(page, this.props.pageSize);
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

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers,
    }),
    withAuthRedirect
)(UsersContainer);
