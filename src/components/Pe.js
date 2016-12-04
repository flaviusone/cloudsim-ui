import React, { Component } from 'react';
import classNames from 'classnames';
import './Pe.css';

class Pe extends Component {
  render() {
    const {status} = this.props.data;
    const peClasses = classNames({
      'pe': true,
      'is-available': status === 1,
      'is-busy': status === 2,
      'is-dead': status === 3
    });

    return (
        <div className={peClasses}>
          <h4>Pe {this.props.data.id}</h4>
        </div>
    );
  }
}

export default Pe;
