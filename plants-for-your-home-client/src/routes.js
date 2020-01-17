import React from 'react'
import { Route, Switch } from 'react-router-dom'
import View from './components/View'
import Home from './components/Home'
import New from './components/New'
import Plants from './components/Plants'
import About from './components/About'
import Links from './components/Links'
import {BrowserRouter as Router} from 'react-router-dom';

export const Routes = (props) => {
    return (
        <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/view' component={View} />
            <Route exact path='/new' component={New} />
            {/* <Route exact path='/plants' component={Plants} /> */}
            <Route exact path='/plants/:id' component={Plants} />
            <Route exact path='/about' component={About} />
            <Route exact path='/links' component={Links} />
        </Switch>
        </Router>
    )
}