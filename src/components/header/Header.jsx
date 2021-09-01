import React from "react";

import styles from "./Header.module.sass";
import img from "../../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src={img} alt="logo.png" />
            </Link>
        </header>
    );
};

export default Header;
