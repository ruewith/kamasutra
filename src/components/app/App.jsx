import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.sass";

import Header from "../header";
import Navbar from "../navbar";
import Profile from "../profile";
import Messages from "../messages";

const App = (props) => {
    const { profilePage, messagesPage } = props.state;
    const { addPost, inputPostText } = props;

    return (
        <Router>
            <div className={styles.app}>
                <Header />
                <Navbar />
                <div className={styles.content}>
                    <Switch>
                        <Route
                            path="/profile"
                            render={() => (
                                <Profile profilePage={profilePage} addPost={addPost} inputPostText={inputPostText} />
                            )}
                        />
                        <Route path="/messages" render={() => <Messages state={messagesPage} />} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
