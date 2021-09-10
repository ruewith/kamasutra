import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

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

export default compose(connect(mapStateToProps, { getUserProfile }), withRouter, withAuthRedirect)(ProfileContainer);
