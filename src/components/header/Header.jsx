import React from "react";

import styles from "./Header.module.sass";
import img from "../../assets/img/logo2.png";
import { Link, NavLink } from "react-router-dom";

const Header = ({ isAuth, login, logout }) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <Link to="/">
                    <img src={img} alt="logo.png" />
                </Link>
            </div>
            <div className={styles.headerLogin}>
                {isAuth ? (
                    <>
                        <NavLink to={"/profile"}>{login} -</NavLink>
                        <button onClick={logout}>logout</button>
                    </>
                ) : (
                    <NavLink to={"/login"}>Login</NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;
