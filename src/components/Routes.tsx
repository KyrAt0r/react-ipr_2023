import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FunctionalComponent from './FunctionalComponent/FunctionalComponent';
import ClassComponent from './ClassComponent/ClassComponent';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/functional" component={FunctionalComponent} />
            <Route exact path="/class" component={ClassComponent} />
        </Switch>
    );
};

export default Routes;
