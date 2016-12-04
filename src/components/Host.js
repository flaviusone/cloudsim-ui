import React, { Component } from 'react';
import Pe from './Pe';

import _ from 'lodash';

import './Host.css';

class Host extends Component {
  render() {
    return (
      <div className="host">
        <h3>Host {this.props.data.id}</h3>
        {this._renderAvailablePe()}
        {this._renderVmList()}
      </div>
    );
  }

  _renderAvailablePe() {
    const {peList} = this.props.data;
    const availablePes = _.filter(peList, pe => {
      // Pe not BUSY
      return pe.status !== 2;
    })

    return <div className="available-pe-container">
      {availablePes.map(pe => {
        return <Pe key={pe.id} data={pe}/>
      })}
    </div>
  }

  _renderVmList() {
    return <div className="vm--container">

    </div>;
  }
}

export default Host;
