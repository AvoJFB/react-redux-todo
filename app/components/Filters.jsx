import React from 'react';

import FilterLink from '../containers/FilterLink';

const Filters = () => (
  <div>
    <FilterLink filter="SHOW_ALL" style={{ marginRight: 15 }}>All</FilterLink>
    <FilterLink filter="SHOW_COMPLETED" style={{ marginRight: 15 }}>Completed</FilterLink>
    <FilterLink filter="SHOW_ACTIVE">Not Completed</FilterLink>
  </div>
);

export default Filters;
