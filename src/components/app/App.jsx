import React from "react";
import { Switch, Route } from "react-router-dom";

import styles from "./App.module.sass";

import Header from "../header";
import Navbar from "../navbar";
import Profile from "../profile";
import { DialogsContainer } from "../dialogs";

const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <Navbar />
            <div className={styles.content}>
                <Switch>
                    <Route path="/profile" render={() => <Profile />} />
                    <Route path="/dialogs" render={() => <DialogsContainer />} />
                </Switch>
            </div>
        </div>
    );
};

export default App;
