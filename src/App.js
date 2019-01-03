import React, { Component } from 'react';
import Family from './Family';
import './App.css';
import SecretAuthWrapper from './Identity';

class App extends Component {
  render() {
    return (
      <SecretAuthWrapper>
        <div className="App">
          <Family />
        </div>
      </SecretAuthWrapper>
    );
  }
}

export default App;
