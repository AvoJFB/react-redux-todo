import uuid from 'js-uuid';
import types from '../actions/actionTypes';

const initialState = [
  {
    id: uuid(),
    title: 'Todo 1',
    completed: true,
  },
  {
    id: uuid(),
    title: 'Todo 2',
    completed: false,
  },
];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: uuid(),
          title: action.title,
          completed: false,
        },
      ];
    case types.TOGGLE_TODO:
      return state.map(todo => ((todo.id === action.id)
        ? { ...todo, completed: !todo.completed }
        : todo));
    default:
      return state;
  }
};

export default todosReducer;
