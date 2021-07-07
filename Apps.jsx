import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Films from "./components/Films";
import FilmDetails from "./components/FilmDetails";

export default function App() {
    return (
        <Router>
            <div>
                <Navbar />

            
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/films">
                        <Films />
                    </Route>
                    <Route exact path="/films/:filmid">
                        <FilmDetails />
                    </Route>
                    <Route exact path="/people">
                        <People />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}