import React, { PropTypes } from 'react';
import { Link } from 'react-router';


import styles from './Header.css';

import Search from './Search'

var libraries = require('../../../../data/index.json')

export function Header(props, context) {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
          <h1 className={styles['site-title']}>
            <Link to="/" >GE2DB</Link>
          </h1>
          <p className={styles.navlink}>
            <Link to="/monster/" >monsters</Link>
          </p>
          <Search items={libraries}/>
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

export default Header;
