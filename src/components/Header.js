import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Registration from './Registration';
import Login from './Login';
import Addtask from './Addtask'
import Tasklist from './Tasklist'
import Profile from './Profile';


function Header() {
    return (
        <>
            <Router>
                
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/registration" component={Registration} />
                    <Route exact path="/addtask" component={Addtask} />
                    <Route exact path="/tasklist" component={Tasklist} />
                    <Route exact path="/profile" component={Profile} />
                </Switch>
            </Router>
        </>
    )
}

export default Header
