import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";

import { getUserProfile, getStatus, updateStatus } from "../../reducers/profile-reducer";

import Profile from "./Profile";

class ProfileContainer extends Component {
    componentDidMount() {
        const { match, getUserProfile, getStatus } = this.props;
        const userId = match.params.userId || 12749;

        getUserProfile(userId);
        getStatus(userId);
    }

    componentDidUpdate(prevProps, prevState) {
        debugger;
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

const mapStateToProps = (state) => ({ profile: state.profilePage.profile, status: state.profilePage.status });

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter
)(ProfileContainer);
