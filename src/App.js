import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './trivia.png';
import './App.css';
import Login from './pages/Login';
import PageGame from './pages/PageGame';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/pagegame" component={ PageGame } />
      <Route exact path="/settings" component={ Settings } />
    </Switch>
  );
}