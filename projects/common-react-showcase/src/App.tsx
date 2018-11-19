import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Button } from '@roybailey/sample-shared';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header>Shared Header Component From Mono Repo</Header>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <Button primary="true">This is a Button</Button>
        </header>
      </div>
    );
  }
}

export default App;
