import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import DataCenter from './DataCenter';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="app">
          <AppBar title="cloudsim-ui" showMenuIconButton={false}/>
        </div>
    );
  }
}

export default App;
