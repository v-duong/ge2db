import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './App.css'

export function IndexPage(props) {
  return (
    <div>
      <br/>
      <p>Hello, welcome to GE2DB, a database for God Eater 2: Rage Burst.</p><br/>
      <p>If you notice any problems, feel free to report it to me on Twitter <a href="https://twitter.com/spinningocelot">@spinningocelot</a>.</p>
      <br/><br/>
      <p>Recent Updates: </p>
        <ul className={styles.circles}>
          <li>Added page for general damage information.</li>
        </ul>
    </div>
  );
}
export default IndexPage;
