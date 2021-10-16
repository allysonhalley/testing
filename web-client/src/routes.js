import React from 'react';
import { isAuthenticated } from './auth';
import Post from './components/Post';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render={ props => (
    isAuthenticated() ? (
      <Component { ...props } />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )
  )} />

)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ () =><h1>Hello World DOM!</h1> } />
      <PrivateRoute path="/app" component={ () => <Post /> } />
    </Switch>
  </BrowserRouter>
);

export default Routes;