import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';

/**
 *  Message: Render a Message
 */
const Message = ({ author, text }) => {
  return (
    <article data-author={author} className="media landbot-message">
      <Avatar />
      <div className="media-content landbot-message-content">
        <div className="content">
          <p>{text}</p>
        </div>
      </div>
    </article>
  );
};

export default Message;

Message.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
};
Message.defaultProps = {
  author: '',
  text: '',
};
