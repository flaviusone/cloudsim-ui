import React, { Component } from 'react';

import './DataCenter.css';

class DataCenter extends Component {
  render() {
    const {name, id, hosts} = this.props.data;
    return (
        <div className="data-center">
          Datacenterul
        </div>
    );
  }
}

export default DataCenter;
