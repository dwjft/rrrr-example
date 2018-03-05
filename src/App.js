import React, { Component } from 'react';
import ActionsAndProps from './ActionsAndProps';
import URLs from './URLs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="rrrr__example">
        <div className="rrrr__example__container">
          <ActionsAndProps renderValue="Main Application" />
          <URLs />
        </div>
      </div>
    );
  }
}

export default App;
