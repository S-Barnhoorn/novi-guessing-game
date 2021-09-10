import React from 'react';
import './Header.css'
import {Link, Route, Switch} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Easy from "../../Pages/Easy/Easy";
import Moderate from "../../Pages/Moderate/Moderate";
import Hard from "../../Pages/Hard/Hard";

const Header = () => {
    return (
        <>
            <div className="nav-container">
                <nav>
                    <ul className="nav-menu">
                        <li><Link to="/" className="nav-menu-single">Home</Link></li>
                        <li><Link to="/easymode" className="nav-menu-single">Easy</Link></li>
                        <li><Link to="/moderatemode" className="nav-menu-single">Moderate</Link></li>
                        <li><Link to="/hardmode" className="nav-menu-single">Hard</Link></li>
                    </ul>
                </nav>
                <br/>
                <div className="single-line"/>
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
