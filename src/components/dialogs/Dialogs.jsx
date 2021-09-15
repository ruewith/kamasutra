import React from "react";
import { reduxForm, Field } from "redux-form";

import styles from "./Dialogs.module.sass";

import MessageItem from "./MessageItem";
import DialogItem from "./DialogItem";

const Dialogs = ({ dialogsPage, sendMessage }) => {
    const { dialogs, messages } = dialogsPage;
    let dialogElements = dialogs.map(({ id, name }) => <DialogItem id={id} name={name} />);
    let messageElements = messages.map(({ message }) => <MessageItem message={message} />);

    const sendNewMessage = (values) => {
        sendMessage(values.messageText);
    };

    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.dialogBlock}>{dialogElements}</div>
                <div className={styles.messageBlock}>{messageElements}</div>
            </div>
            <MessageRxForm onSubmit={sendNewMessage} />
        </div>
    );
};

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.messageForm}>
            <div>
                <Field component={"textarea"} name={"messageText"} placeholder="Send message" />
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    );
};

const MessageRxForm = reduxForm({
    form: "message",
})(MessageForm);

export default Dialogs;
