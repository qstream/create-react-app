import React, { Component } from 'react';
import logo from './logo.svg';
import { Text } from '@qstream/quik';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://github.com/qstream/create-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Welcome to Qstream's Create React App
          </a>
        </header>
        <Text>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Text>
      </div>
    );
  }
}

export default App;
