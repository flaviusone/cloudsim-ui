import React, { Component } from 'react';
import './Cloudlet.css';

class Cloudlet extends Component {
  render() {
    const {cloudletId, status} = this.props.data;

    return (
        <div className="cloudlet">
          <h4>Cloudlet - {cloudletId}</h4>
          {status}
        </div>
    );
  }
}

export default Cloudlet;
