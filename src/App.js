import React, { Component } from 'react';
import Family from './Family';
import './App.css';
import SecretAuthWrapper from './Identity';
import Toggle from './Toggle';

class App extends Component {
  render() {
    return (
      <SecretAuthWrapper>
        <div className="App">
          <Family />
          <Toggle />
        </div>
      </SecretAuthWrapper>
    );
  }
}

export default App;
