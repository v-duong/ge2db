import React, { PropTypes } from 'react';
import { Link } from 'react-router';


import styles from './Header.css';

import Search from './Search'

var index = require('../../../../assets/index.json')

export function Header(props, context) {
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-div']}>
          <h1 className={styles['site-title']}>
            <Link to="/" >GE2DB</Link>
          </h1>
          <ul className={styles.navlist}>
            <li className={styles.navlistitem}>
            <p className={styles.navlink}>
              <Link to="/monster/" className={styles.navlistitemlink}>monsters</Link>
            </p>
            </li>
              <Search items={index}/>
          </ul>

      </div>
    </nav>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

export default Header;
