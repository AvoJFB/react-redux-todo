import React from 'react';
import PropTypes from 'prop-types';

const Link = props => (
  <button onClick={() => props.onChangeFilter()}>
    {props.children}
  </button>
);

Link.propTypes = {
  onChangeFilter: PropTypes.func,
  children: PropTypes.node,
};

export default Link;
