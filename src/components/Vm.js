import React, { Component } from 'react';
import Pe from './Pe';
import _ from 'lodash';

import './Vm.css';

class Vm extends Component {
  render() {

    return (
        <div className="vm">
          <h4>Vm {this.props.data.id}</h4>
          {this._renderBusyPe()}
        </div>
    );
  }

  _renderBusyPe() {
    const busyPes = _.times(this.props.data.numberOfPes, (index) => {
      return {
        id: index,
        status: 2,
        mips: null
      }
    })
    return <div className="busy-pe-container">
      {busyPes.map(pe => {
        return <Pe key={pe.id} data={pe}/>
      })}
    </div>
  }
}

export default Vm;
