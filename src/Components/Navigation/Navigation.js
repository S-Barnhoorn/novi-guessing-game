import React from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.module.css';

const Navigation = () => {

    return (
        <nav>
            <ul>
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
            </ul>
        </nav>
    );
};

export default Navigation;
