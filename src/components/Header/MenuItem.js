import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ label, key }) => {
  return (
    { label }
  );
};

MenuItem.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default MenuItem;
