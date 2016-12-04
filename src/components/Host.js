import React, { Component } from 'react';

import './Host.css';

class Host extends Component {
  render() {
    return (
      <div className="host">
        {this.props.data.id}
      </div>
    );
  }
}

export default Host;
