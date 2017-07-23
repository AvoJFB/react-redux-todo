import types from './actionTypes';


const setVisibilityFilter = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
});

export default setVisibilityFilter;
