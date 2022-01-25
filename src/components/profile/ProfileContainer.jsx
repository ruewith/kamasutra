import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";

import { getUserProfile, getStatus, updateStatus, savePhoto, editProfile } from "../../reducers/profile-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";

import Profile from "./ProfilePage";
class ProfileContainer extends Component {
    refreshProfile() {
        const { match, getUserProfile, getStatus, authId } = this.props;
        let userId = match.params.userId;

        if (!userId) {
            userId = authId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }

        getUserProfile(userId);
        getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }

        if (prevProps.match.params.userId !== this.props.match.userId) {
            this.refreshProfile();
        }
    }

    render() {
        const { profile, status, updateStatus, savePhoto } = this.props;

        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                savePhoto={savePhoto}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authId: state.auth.id,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, editProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
