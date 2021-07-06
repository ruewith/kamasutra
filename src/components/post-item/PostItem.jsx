import React from "react";

import styles from "./PostItem.module.sass";
import ava from "../../img/pngegg.png";

const PostItem = (props) => {
    const { text, likesCount } = props.state;

    return (
        <div className={styles.item}>
            <img src={ava} alt="avatar.png" />
            <p>
                <span>{text}</span> <span>likes:{likesCount}</span>
            </p>
        </div>
    );
};

export default PostItem;
