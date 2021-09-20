import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import styles from "./App.module.sass";

import { initializeApp } from "../../reducers/app-reduser";
import Navbar from "../navbar";
import Login from "../login";
import { HeaderContainer } from "../header";
import { ProfileContainer } from "../profile";
import { DialogsContainer } from "../dialogs";
import { UsersContainer } from "../users";
import { compose } from "redux";
import Preloader from "../common/preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader />;

        return (
            <div className={styles.app}>
                <HeaderContainer />
                <Navbar />
                <div className={styles.content}>
                    <Switch>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                        <Route path="/dialogs" render={() => <DialogsContainer />} />
                        <Route path="/users" render={() => <UsersContainer />} />
                        <Route path="/login" render={() => <Login />} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
