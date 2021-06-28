import React from 'react';
import { Home } from './pages/Home';
import { LandingPage } from './pages/LandingPage';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { PageNotFound } from './pages/PageNotFound';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/home" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route component={PageNotFound} />
        </Switch>
    )
}