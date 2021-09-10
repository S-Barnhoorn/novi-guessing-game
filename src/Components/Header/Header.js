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
                <li className="nav-menu-single"><Link to="/">Home</Link></li>
                <li className="nav-menu-single"><Link to="/easymode">Easy</Link></li>
                <li className="nav-menu-single"><Link to="/moderatemode">Moderate</Link></li>
                <li className="nav-menu-single"><Link to="/hardmode">Hard</Link></li>
            </ul>
            </nav>
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
