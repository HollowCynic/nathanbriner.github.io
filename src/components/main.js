import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import LandingPage from './landingpage';
import Aboutme from './aboutme'
import schedule from './schedule'
import experiments from './experiments'

const Main = () =>(
        <Switch>
            <Route exact path="/nathanbriner.github.io" component={LandingPage}/>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/aboutme" component={Aboutme}/>
            <Route exact path="/schedule" component={schedule}/>
            <Route exact path="/experiments" component={experiments}/>
        </Switch>
)


export default Main;