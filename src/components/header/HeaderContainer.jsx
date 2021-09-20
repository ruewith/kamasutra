import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../reducers/auth-reducer";

class HeaderContainer extends Component {
    render() {
        debugger;

        return <Header {...this.props} />;
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
