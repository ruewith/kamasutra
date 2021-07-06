import React from "react";

import styles from "./Messages.module.sass";

import MessageItem from "../message-item";
import DialogItem from "../dialog-item";

const Messages = (props) => {
    const { dialogs, messages } = props.state;

    let dialogElements = dialogs.map(({ id, name }) => <DialogItem id={id} name={name} />);
    let messageElements = messages.map(({ message }) => <MessageItem message={message} />);

    return (
        <div>
            <div className={styles.messages}>
                <div className={styles.dialogBlock}>{dialogElements}</div>
                <div className={styles.messageBlock}>{messageElements}</div>
            </div>
        </div>
    );
};

export default Messages;
