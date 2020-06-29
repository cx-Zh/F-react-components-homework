import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chat from '../Chat/Chat';
import Welcome from '../Welcome/Welcome';
import NotFound from '../NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>

            <Route path="/notfound">
              <NotFound />
            </Route>

            <Route path="/chat">
              <Chat />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
