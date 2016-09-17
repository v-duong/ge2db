import React, { PropTypes } from 'react';
import { Link } from 'react-router';


import styles from './Header.css';


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
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

export default Header;
