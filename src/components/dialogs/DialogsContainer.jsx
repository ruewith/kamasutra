import React from "react";

import styles from "./Dialogs.module.sass";

import { sendMessageAC, updateMessageTextAC } from "../../redusers/dialogs-reduser";

import Dialogs from ".";

const DialogsContainer = ({ store }) => {
    const state = store.getState();

    const updateMessageText = (text) => {
        store.dispatch(updateMessageTextAC(text));
    };

    const sendMessage = () => {
        store.dispatch(sendMessageAC());
    };

    return (
        <Dialogs
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            messageText={state.dialogsPage.messageText}
            sendMessage={sendMessage}
            updateMessageText={updateMessageText}
        />
    );
};

export default DialogsContainer;
