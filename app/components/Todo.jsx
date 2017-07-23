import React from 'react';
import { PropTypes } from 'prop-types';

const Todo = props => (
  <div>
    <h3>{props.todo.title}</h3>
    <span>
      {props.todo.completed ? 'Completed' : 'Not Completed'}
    </span>
    <button onClick={() => props.changeCompleted(props.todo.id)}>Toggle</button>
    <p>id: {props.todo.id}</p>
  </div>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }),
  changeCompleted: PropTypes.func,
};

export default Todo;

