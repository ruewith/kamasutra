import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { setUserProfile } from "../../reducers/profile-reducer";

import Profile from "./Profile";

class ProfileContainer extends Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || 12749;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
            this.props.setUserProfile(response.data);
        });
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

const mapStateToProps = (state) => ({ profile: state.profilePage.profile });

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
