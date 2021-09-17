import React from 'react';
import styles from "./Header.module.css";
import {Link, Route, Switch} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Easy from "../../Pages/Easy/Easy";
import Moderate from "../../Pages/Moderate/Moderate";
import Hard from "../../Pages/Hard/Hard";

const Header = () => {
    return (
        <>
            <div className={styles.nav_container}>
                <nav>
                    <ul className={styles.nav_menu}>
                        <li><Link to="/" className={styles.nav_menu_single}>Home</Link></li>
                        <li><Link to="/easymode" className={styles.nav_menu_single}>Easy</Link></li>
                        <li><Link to="/moderatemode" className={styles.nav_menu_single}>Moderate</Link></li>
                        <li><Link to="/hardmode" className={styles.nav_menu_single}>Hard</Link></li>
                    </ul>
                </nav>
                <br/>
                <div className={styles.single_line}/>
            </div>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/easymode">
                        <Easy/>
                    </Route>
                    <Route path="/moderatemode">
                        <Moderate/>
                    </Route>
                    <Route path="/hardmode">
                        <Hard/>
                    </Route>
                </Switch>
            </div>
        </>
    );
};

export default Header;
