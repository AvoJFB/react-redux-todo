import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import NewTodoForm from './NewTodoForm';
import Filters from './Filters';

const App = () => (
  <div>
    <h1>Todo App</h1>
    <NewTodoForm />
    <Filters />
    <VisibleTodoList />
  </div>
);

export default App;
