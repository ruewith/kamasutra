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
} from "../../reducers/users-reducer";

import Preloader from "../preloader";
import Users from "./Users";

class UsersContainer extends Component {
    componentDidMount() {
        this.props.toogleFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.toogleFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }

    changeCurrentPage = (page) => {
        this.props.toogleFetching(true);
        this.props.setCurrentPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.toogleFetching(false);
            });
    };

    render() {
        const { isFetching, totalCount, pageSize, currentPage, users, follow, unfollow } = this.props;

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
    };
};

export default connect(mapStateToProps, { toogleFetching, setUsers, setCurrentPage, setTotalCount, follow, unfollow })(
    UsersContainer
);
