import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './Redux/store/store'
import DefaultRoute from './Route/DefaultRoute';

function App() {
  return (
    <Provider store={store}>
    <div style={{height:"100%"}}>
        {/* <Route exact path="/" component={Registration}/>
        <Route path="/login" component={Login}/>
        <Route path="/forgetpassword" component={ForgetPassword}/>
        <Route path="/resetpassword/:token" component={ResetPassword}/>
        <Route path="/dashboard" component={Dashboard}/> */}
        <DefaultRoute/>
    </div>
    </Provider>
  );
}

export default App;
