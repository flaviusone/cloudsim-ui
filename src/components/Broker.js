import React, { Component } from 'react';
import Cloudlet from './Cloudlet';

import './Broker.css';

class Broker extends Component {
  render() {
    const {
      cloudletList,
      cloudletSubmittedList,
      cloudletReceivedList} = this.props.data;

    return (
        <div className="broker">
          <h2>Broker</h2>
          <h3>Cloudlet list</h3>
          {this._renderCloudletList(cloudletList)}
          <h3>Cloudlet submitted list</h3>
          {this._renderCloudletList(cloudletSubmittedList)}
          <h3>Cloudlet received list</h3>
          {this._renderCloudletList(cloudletReceivedList)}
        </div>
    );
  }

  _renderCloudletList(cloudletList) {
    if(!cloudletList) {
      return null;
    }

    return <div className="cloudlet-container">
      {cloudletList.map(cloudlet => {
        return <Cloudlet key={cloudlet.cloudletId} data={cloudlet} />
      })}
    </div>;
  }
}

export default Broker;
