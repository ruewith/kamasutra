import React from "react";

import styles from "./Dialogs.module.sass";

import MessageItem from "../message-item";
import DialogItem from "../dialog-item";

const Dialogs = (props) => {
    const { dialogs, messages } = props.state;

    let dialogElements = dialogs.map(({ id, name }) => <DialogItem id={id} name={name} />);
    let messageElements = messages.map(({ message }) => <MessageItem message={message} />);

    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.dialogBlock}>{dialogElements}</div>
                <div className={styles.messageBlock}>{messageElements}</div>
            </div>
        </div>
    );
};

export default Dialogs;
