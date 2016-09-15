import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export function Header(props, context) {

  return (
    <div>
          <h1>
            <Link to="/" >HEADER</Link>
          </h1>
          <h1>
            <Link to="/monster/" >monsters</Link>
          </h1>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

export default Header;
