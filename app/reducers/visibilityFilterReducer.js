import types from '../actions/actionTypes';

const visibilityFilterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilterReducer;
