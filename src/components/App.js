import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import DataCenter from './DataCenter';
import Broker from './Broker';

import './App.css';

class App extends Component {
  render() {
    const {dataCenter} = this.props.data
    return (
        <div className="app">
          <AppBar
            title="cloudsim-ui"
            showMenuIconButton={false}/>
          <div className="content-container">
            <DataCenter data={dataCenter}/>
            <Broker data={dataCenter}/>
          </div>
        </div>
    );
  }
}

export default App;
