import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames';
import './Pe.css';

class Pe extends Component {
  render() {
    const {status, id} = this.props.data;
    const peClasses = classNames({
      'pe': true,
      'is-available': status === 1,
      'is-busy': status === 2,
      'is-dead': status === 3
    });

    return (
        <div className={peClasses}  data-tip data-for={`pe-${id}`} data-event='click'>
          <h4>Pe</h4>
          {this._renderTooltip()}
        </div>
    );
  }

  _renderTooltip() {
    const {id, mips, status} = this.props.data;

    return <ReactTooltip id={`pe-${id}`} place="right" type="info" effect="solid"
                      class='tooltip'  globalEventOff='mousemove'>
      <div>Id: {id}</div>
      <div>Mips: {mips}</div>
      <div>Status: {status}</div>
    </ReactTooltip>
  }
}

export default Pe;
