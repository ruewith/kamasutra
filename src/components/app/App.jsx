import React from "react";
import { Switch, Route } from "react-router-dom";

import styles from "./App.module.sass";

import Navbar from "../navbar";
import Login from "../login";
import { HeaderContainer } from "../header";
import { ProfileContainer } from "../profile";
import { DialogsContainer } from "../dialogs";
import { UsersContainer } from "../users";

const App = () => {
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
};

export default App;
