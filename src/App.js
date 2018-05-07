import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { StateCounterProvider } from './components/stateCounterProvider';
import Counter from './components/counter';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Context API</h1>
        </header>

        <StateCounterProvider initialState={{ value: 0 }}>
          <Counter label="Current Value" observedBits={11} />
          <Counter label="Last Odd Value" observedBits={1} />
          <Counter label="Last Even Value" observedBits={10} />
        </StateCounterProvider>
      </div>
    );
  }
}

export default App;
