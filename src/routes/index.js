import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../components/containers/HomePage';
import LoginPage from '../components/containers/LoginPage';

export default () =>
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
    </Switch>;