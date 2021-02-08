import React from 'react';
import PropTypes from 'prop-types';

/**
 *  Icon: Render an Icon
 */
const Icon = ({ icon, size }) => {
  return (
    <span className={`icon ${size}`}>
      <i className={`fas fa-lg ${icon}`}></i>
    </span>
  );
};

export default Icon;

Icon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
};
Icon.defaultProps = {
  size: 'is-large',
  icon: 'fa-paper-plane',
};
