import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Login from './views/Login';
import Box from './views/Box';

const RootRouter = () => {
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/box/:boxId">
                <Box/>
            </Route>
            <Route path="/">
                <LandingPage />
            </Route>
            <Route path="*">
                <div>Not Found 404</div>
            </Route>
        </Switch>
    )
  }
  
  export default RootRouter;