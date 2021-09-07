import React from "react";

import styles from "./Header.module.sass";
import img from "../../img/logo.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, login }) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <Link to="/">
                    <img src={img} alt="logo.png" />
                </Link>
            </div>
            <div className={styles.headerLogin}>
                {isAuth ? <NavLink to={"/"}>{login}</NavLink> : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;
