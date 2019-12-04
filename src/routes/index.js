import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../components/containers/HomePage';

export default () =>
    <Switch>
        <Route exact path="/" component={HomePage}/>
    </Switch>;