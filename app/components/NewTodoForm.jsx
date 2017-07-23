import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addTodo } from '../actions/todosActions';

const NewTodoForm = ({ dispatch }) => {
  let input;
  return (
    <div>
      <h2>Add New Todo</h2>
      <input ref={(node) => { input = node; }} type="text" />
      <button onClick={() => { dispatch(addTodo(input.value)); input.value = ''; }}>Add</button>
    </div>
  );
};

NewTodoForm.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(NewTodoForm);
