import React from "react";

import styles from "./Dialogs.module.sass";

import MessageItem from "../message-item";
import DialogItem from "./DialogItem";

const Dialogs = ({ dialogsPage, updateMessageText, sendMessage, isAuth }) => {
    const { dialogs, messages, messageText } = dialogsPage;
    let dialogElements = dialogs.map(({ id, name }) => <DialogItem id={id} name={name} />);
    let messageElements = messages.map(({ message }) => <MessageItem message={message} />);

    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.dialogBlock}>{dialogElements}</div>
                <div className={styles.messageBlock}>{messageElements}</div>
            </div>
            <div className={styles.messageForm}>
                <div>
                    <textarea
                        placeholder="Send message"
                        onChange={(event) => updateMessageText(event.target.value)}
                        value={messageText}
                    />
                </div>
                <div>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
