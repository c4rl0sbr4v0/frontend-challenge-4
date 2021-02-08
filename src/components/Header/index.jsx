import React from 'react';

/**
 *  Header: Render a Header with content provided
 * @param {Object} props
 */
const Header = ({ children }) => <div className="landbot-header">{children}</div>;

export default React.memo(Header, () => true);
