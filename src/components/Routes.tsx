import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FunctionalComponent from './FunctionalComponent/FunctionalComponent';
import ClassComponent from './ClassComponent/ClassComponent';
import Authorization from "./Authorization/Authorization";
import Home from "../Pages/Home/Home";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/functional" component={FunctionalComponent} />
            <Route exact path="/class" component={ClassComponent} />
            <Route exact path="/login" component={Authorization}/>
        </Switch>
    );
};

export default Routes;


// <Route path="/example/:id" component={ExampleComponent} /> Передача в роут параметра
// const { id } = useParams<ExampleParams>();