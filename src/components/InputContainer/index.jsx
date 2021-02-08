import React from 'react';
import PropTypes from 'prop-types';

/**
 *  InputContainer: Render a Input Container
 */
const InputContainer = ({ children }) => {
  return (
    <div className="landbot-input-container">
      <div className="field">
        <div className="control">{children}</div>
      </div>
    </div>
  );
};

export default InputContainer;

InputContainer.propTypes = {
  children: PropTypes.node,
};
InputContainer.defaultProps = {
  children: '',
};
