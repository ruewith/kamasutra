import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.sass";

import Header from "../header";
import Navbar from "../navbar";
import Profile from "../profile";
import { DialogsContainer } from "../dialogs";

const App = (props) => {
    const { dialogsPage } = props.state;
    const { dispatch, store } = props;

    return (
        <Router>
            <div className={styles.app}>
                <Header />
                <Navbar />
                <div className={styles.content}>
                    <Switch>
                        <Route path="/profile" render={() => <Profile store={store} />} />
                        <Route path="/dialogs" render={() => <DialogsContainer store={store} />} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
