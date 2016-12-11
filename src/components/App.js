import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import DataCenter from './DataCenter';
import Broker from './Broker';

import './App.css';

class App extends Component {
  render() {
    const {dataCenterList, broker} = this.props.data

    return (
        <div className="app">
          <AppBar
            title={`cloudsim-ui - clock: ${this.props.data.clock || 0}`}
            showMenuIconButton={false}/>
          <div className="content-container">
            <div className="datacenters-container">
              {this._renderDataCenters(dataCenterList)}
            </div>
            <Broker data={broker}/>
          </div>
        </div>
    );
  }

  _renderDataCenters(dataCenters) {
    if(!dataCenters) {
      return null;
    }
    return dataCenters.map(dataCenter => {
      return <DataCenter key={dataCenter.name} data={dataCenter}/>
    })
  }
}

export default App;
