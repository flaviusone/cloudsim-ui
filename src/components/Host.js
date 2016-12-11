import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import Pe from './Pe';
import Vm from './Vm';

import _ from 'lodash';

import './Host.css';

class Host extends Component {
  constructor () {
    super()
    this.state = {
      popOverOpen: false
    }
  }

  render() {
    const {id} = this.props.data;

    return (
      <div className="host" data-tip data-for={`host-${id}`} data-event='click'>
        <h3>Host {id}</h3>
        {this._renderAvailablePe()}
        {this._renderVmList()}
        {this._renderTooltip()}
      </div>
    );
  }

  _renderTooltip() {
    const {id, storage, ram, bw, datacenter} = this.props.data;

    return <ReactTooltip id={`host-${id}`} place="right" type="info" effect="solid"
                      class='tooltip' globalEventOff='mousemove'>
      <div>Id: {id}</div>
      <div>Storage: {storage}</div>
      <div>RAM: {ram}</div>
      <div>Bandwidth: {bw}</div>
      <div>Datacenter: {datacenter}</div>
    </ReactTooltip>
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
    const {vmList} = this.props.data;

    return <div className="vm-container">
      {vmList.map(vm => {
        return <Vm key={vm.uid} data={vm} />
      })}
    </div>;
  }
}

export default Host;
