import React from 'react';
import PropTypes from 'prop-types';

/**
 *  MessageContainer: Render a Message Container
 */
const MessageContainer = ({ children }) => {
  return (
    <div id="landbot-messages-container" className="landbot-messages-container">
      {children}
    </div>
  );
};

export default MessageContainer;

MessageContainer.propTypes = {
  children: PropTypes.node,
};
MessageContainer.defaultProps = {
  children: '',
};
