import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './pages/home';
import Login from './pages/login';

const App = () => {

  const [isUserAuthenticated, setIsUserAuthenticated] = useState(true);

  return (
    <Router>
      <Switch>

        <Route path="/" exact render={() => {
          return (
            isUserAuthenticated ? <Redirect to="/home" /> : <Redirect to="/login" /> 
         )
        }}
        />


        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/home" exact>
          <Home/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
