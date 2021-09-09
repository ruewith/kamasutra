import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { getUserProfile } from "../../reducers/profile-reducer";

import Profile from "./Profile";

class ProfileContainer extends Component {
    componentDidMount() {
        const { match, getUserProfile } = this.props;
        const userId = match.params.userId || 12749;

        getUserProfile(userId);
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

const mapStateToProps = (state) => ({ profile: state.profilePage.profile });

export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer));
