import React from 'react';
import PropTypes from 'prop-types';

/**
 *  Input: Render an Input
 */
const Input = ({ value, onChange, onKeyUp, placeholder }) => {
  return (
    <input
      className="landbot-input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
    />
  );
};

export default Input;

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
Input.defaultProps = {
  value: '',
  onChange: undefined,
  onKeyUp: undefined,
  placeholder: 'Insert text here',
};
