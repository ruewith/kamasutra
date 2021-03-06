import React from "react";

import styles from "./Dialogs.module.sass";

const MessageItem = ({ message }) => {
    return <div className={styles.messageItem}>{message}</div>;
};

export default MessageItem;
