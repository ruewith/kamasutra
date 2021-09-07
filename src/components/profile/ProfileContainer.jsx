import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";

import { setUserProfile } from "../../reducers/profile-reducer";

import Profile from "./Profile";

class ProfileContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
            console.log(response.data);
            this.props.setUserProfile(response.data);
        });
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

const mapStateToProps = (state) => ({ profile: state.profilePage.profile });

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
