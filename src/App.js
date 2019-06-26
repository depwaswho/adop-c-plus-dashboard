import React from 'react';
import './App.css';
import Header from './components/Header';
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Provision from './components/Provision'
import MonitoringPanels from './components/MonitoringPanels'
import { createHashHistory } from "history";

function App() {
  const history = createHashHistory();
  return (
    <MonitoringPanels/>
  );
}

export default App;
