import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.sass";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to="/profile" activeClassName={styles.active}>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" activeClassName={styles.active}>
                        Dialogs
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users" activeClassName={styles.active}>
                        Users
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
