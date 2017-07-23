import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = props => (
  <ul>
    {props.todos.map(todo => (
      <Todo
        todo={todo}
        key={todo.id}
        changeCompleted={props.onChangeCompleted}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ),
  onChangeCompleted: PropTypes.func,
};

export default TodoList;
