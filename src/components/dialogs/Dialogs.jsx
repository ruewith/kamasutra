import React from "react";
import { reduxForm, Field } from "redux-form";

import styles from "./Dialogs.module.sass";

import MessageItem from "./MessageItem";
import DialogItem from "./DialogItem";
import { Textarea } from "../common/form-controls";
import { maxLengthValidator, requiredFieldValidator } from "../../utils/validators";

const maxLength50 = maxLengthValidator(50);

const Dialogs = ({ dialogsPage, sendMessage }) => {
    const { dialogs, messages } = dialogsPage;
    const dialogElements = dialogs.map(({ id, name }) => <DialogItem id={id} name={name} />);
    const messageElements = messages.map(({ message }) => <MessageItem message={message} />);

    const sendNewMessage = (values) => {
        sendMessage(values.messageText);
        values.messageText = "";
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
                <Field
                    component={Textarea}
                    name={"messageText"}
                    validate={[requiredFieldValidator, maxLength50]}
                    placeholder="Send message"
                />
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
