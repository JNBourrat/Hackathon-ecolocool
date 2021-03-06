import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BoardGame from './Components/BoardGame';
import HomePage from './Components/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/eden-hackathon" component={HomePage} />
            <Route path="/eden-hackathon/boardgame" component={BoardGame} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
