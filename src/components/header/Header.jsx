import React from "react";

import styles from "./Header.module.sass";
import img from "../../img/logo.png";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={img} alt="logo.png" />
        </header>
    );
};

export default Header;
