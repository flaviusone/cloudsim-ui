import * as types from '../actions/action-types';
import appFixture from '../fixtures/base.js';

const initialState = {
    data: {},
    isFetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_FETCH_BEGIN: {
        return { ...state, isFetching: true };
    }
    case types.DATA_FETCH_SUCCESS: {
        return { isFetching: false, data: { ...state.data, ...action.payload }};
    }
    case types.DATA_FETCH_ERROR: {
        return { ...state, isFetching: false };
    }
    default:
        return state;
  }
}
