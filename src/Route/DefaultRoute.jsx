import React from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import Login from '../Components/Login'
import Registration from '../Components/Registration'
import ForgetPassword from '../Components/ForgetPassword'
import ResetPassword from '../Components/ResetPassword'
import DashBoard from '../Components/Dashboard'
import ProtectedRoute from '../Components/ProtectedRoute'
import history from '../Components/history'

export default function DefaultRoute(){
    return(
        <Router history={history}>
            <Switch>
            <Route path="/login" component={Login}/>
            <Route exact path="/" component={Registration}/>
            <Route path="/forgetpassword" component={ForgetPassword}/>
            <Route path="/resetpassword/:token" component={ResetPassword}/>
            <ProtectedRoute path='/dashboard' component={DashBoard}/>
            </Switch>
        </Router>
    )
}