import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import MainContainer from './MainContainer'

const my404 = () => {
  return(
    <div>
      <h1>Error!</h1>
    </div>
  )
}

function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component = {MainContainer} />
        <Route component = {my404} />
      </Switch>
    </main>
  );
}

export default App;
