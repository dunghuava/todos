import React, { Component } from 'react';
import './App.css';
import Boxer from './components/Boxer';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Boxer></Boxer>
      </div>
    );
  }
}

export default App;