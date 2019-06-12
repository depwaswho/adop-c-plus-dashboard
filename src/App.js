import React from 'react';
import './App.css';
import Header from './components/Header';
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Provision from './components/Provision'
import Users from './components/Users'
import { createHashHistory } from "history";

function App() {
  const history = createHashHistory();
  return (
    <DndProvider backend={HTML5Backend}>
      <Router history={history}>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/provision' component={Provision}/>
        <Route exact path='/users' component={Users}/>
      </Switch>
      </Router>
    </DndProvider>
  );
}

export default App;
