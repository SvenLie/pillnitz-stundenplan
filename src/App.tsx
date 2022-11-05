import React from 'react';
import './App.scss';
import {HashRouter, NavLink, Switch, Route, Redirect} from "react-router-dom";
import Impressum from "./Impressum"
import Datenschutz from "./Datenschutz"
import Home from "./Home"

function App() {
    return (
        <HashRouter>
            <div>
                <nav>
                    <ul className="navigation">
                        <li className="navigation-item">
                            <NavLink activeClassName="active" to="/home">Home</NavLink>
                        </li>
                        <li className="navigation-item">
                            <NavLink activeClassName="active" to="/datenschutz">Datenschutz</NavLink>
                        </li>
                        <li className="navigation-item">
                            <NavLink activeClassName="active" to="/impressum">Impressum</NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/datenschutz">
                        <Datenschutz/>
                    </Route>
                    <Route path="/impressum">
                        <Impressum/>
                    </Route>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route exact path="/">
                        <Redirect to={{pathname: "/home"}}/>
                    </Route>
                </Switch>
            </div>
        </HashRouter>


    );
}

export default App;
