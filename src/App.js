import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './Redux/store/store'
import DefaultRoute from './Route/DefaultRoute';

function App() {
  return (
    <Provider store={store}>
    <div style={{height:"100%"}}>
        <DefaultRoute/>
    </div>
    </Provider>
  );
}

export default App;
