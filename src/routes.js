import React from 'react'

import Home from './Container/Home'
import Orders from './Container/Orders'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Routes() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/orders" component={Orders}/>
            </Switch>
        </Router>
    )

}

export default Routes