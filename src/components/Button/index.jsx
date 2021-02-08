import React from 'react';
import PropTypes from 'prop-types';

/**
 *  Button: Render a Button
 */
const Button = ({ children, onClick, disabled }) => {
  return (
    <button className="button landbot-input-send" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  children: '',
  onClick: null,
  disabled: false,
};
