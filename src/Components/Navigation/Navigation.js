import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Navigation.module.css';
import Quiz from "../../Pages/Quiz/Quiz";

const Navigation = () => {

    return (
        <nav>
            <ul className={styles.nav_list}>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/easy'>
                        Easy
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/moderate">
                        Moderate
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/hard">
                        Hard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/quiz/:id">
                        Quiz
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
