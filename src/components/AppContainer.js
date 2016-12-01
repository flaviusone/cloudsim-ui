import React, {Component} from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {fetchData, fetchError, receiveData} from '../actions/data-fetch-actions';
import App from './App';

class AppContainer extends Component {
  componentWillReceiveProps(nextProps) {
      clearTimeout(this.timeout);

      if (!nextProps.isFetching) {
        this.startPoll();
      }
  }

  componentWillMount() {
    this.startPoll();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  startPoll() {
    this.timeout = setTimeout(() => this.props.dataFetch(), 1000);
  }

  render() {
    return <MuiThemeProvider>
      <App data={this.props.data}/>
    </MuiThemeProvider>
  }
}

function mapStateToProps(state) {
  return {
    data: state.dataFetch.data,
    isFetching: state.dataFetch.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dataFetch() {
      const fullUrl = 'http://localhost:4567'

      dispatch(fetchData())

      return fetch(fullUrl)
          .then(response =>
            response.json().then(json => {
              if (!response.ok) {
                dispatch(fetchError())

                return Promise.reject(json)
              }

              dispatch(receiveData(json));

              return json
            })
          )
          .catch(function(err) {
            dispatch(fetchError())
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
