import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

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
