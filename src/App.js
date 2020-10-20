import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Registration from './Components/Registration';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Registration}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
