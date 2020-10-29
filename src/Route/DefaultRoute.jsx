import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Login from '../Components/Login'
import Registration from '../Components/Registration'
import ForgetPassword from '../Components/ForgetPassword'
import ResetPassword from '../Components/ResetPassword'
import DashBoard from '../Components/Dashboard'

export default function DefaultRoute(){
    return(
        <BrowserRouter>
            <Route path="/login" component={Login}/>
            <Route exact path="/" component={Registration}/>
            <Route path="/forgetpassword" component={ForgetPassword}/>
            <Route path="/resetpassword" component={ResetPassword}/>
            <Route path='/dashboard' component={DashBoard}/>
        </BrowserRouter>
    )
}