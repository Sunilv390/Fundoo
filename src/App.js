import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Registration from './Components/Registration';
import Login from './Components/Login';
import ForgetPassword from './Components/ForgetPassword';
import ResetPassword from './Components/ResetPassword';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Registration}/>
        <Route path="/login" component={Login}/>
        <Route path="/forgetpassword" component={ForgetPassword}/>
        <Route path="/resetpassword" component={ResetPassword}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
