import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/contacts" />
      </Route>
      <Route path="/contacts" exact component={HomePage} />
      <Route path="*" component={HomePage} />
    </Switch>
  );
}

export default App;
