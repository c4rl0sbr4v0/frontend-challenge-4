import React from 'react';
import r2 from '../../assets/r2.jpg';

/**
 *  Avatar: Render an Avatar
 */
const Avatar = () => {
  return (
    <figure className="media-left landbot-message-avatar">
      <p className="image is-64x64">
        <img className="is-rounded" src={r2} alt="" />
      </p>
    </figure>
  );
};

export default React.memo(Avatar, () => true);
