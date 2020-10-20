import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Registration from './Components/Registration';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Registration}/>
      </Router>
    </div>
  );
}

export default App;
