import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.sass";

import Header from "../header";
import Navbar from "../navbar";
import Profile from "../profile";
import Dialogs from "../dialogs";

const App = (props) => {
    const { profilePage, dialogsPage } = props.state;
    const { dispatch } = props;

    return (
        <Router>
            <div className={styles.app}>
                <Header />
                <Navbar />
                <div className={styles.content}>
                    <Switch>
                        <Route
                            path="/profile"
                            render={() => <Profile profilePage={profilePage} dispatch={dispatch} />}
                        />
                        <Route path="/dialogs" render={() => <Dialogs state={dialogsPage} />} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
