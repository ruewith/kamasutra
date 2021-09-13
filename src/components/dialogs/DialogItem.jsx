import React from "react";
import { Link } from "react-router-dom";

import styles from "./Dialogs.module.sass";

const DialogItem = ({ id, name }) => {
    return (
        <div className={styles.dialogItem} id={id}>
            <Link to={`/dialogs/${id}`}>{name}</Link>
        </div>
    );
};

export default DialogItem;
