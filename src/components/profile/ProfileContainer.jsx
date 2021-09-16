import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";

import { getUserProfile, getStatus, updateStatus } from "../../reducers/profile-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";

import Profile from "./Profile";

class ProfileContainer extends Component {
    componentDidMount() {
        const { match, getUserProfile, getStatus, isAuth, authId } = this.props;
        let userId = match.params.userId;

        if (!userId) {
            userId = authId;
        }

        getUserProfile(userId);
        getStatus(userId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        const { profile, status, updateStatus } = this.props;

        return <Profile {...this.props} profile={profile} status={status} updateStatus={updateStatus} />;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter
    // withAuthRedirect
)(ProfileContainer);
