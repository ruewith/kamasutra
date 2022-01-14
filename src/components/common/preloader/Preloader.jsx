import React from "react";

import styles from "./Preloader.module.sass";
import infinity from "../../../assets/img/infinity.svg";

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={infinity} alt="wait" />
        </div>
    );
};

export default Preloader;
