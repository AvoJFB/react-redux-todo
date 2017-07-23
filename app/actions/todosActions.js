import types from './actionTypes';


export const addTodo = title => ({
  type: types.ADD_TODO,
  title,
});

export const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  id,
});
