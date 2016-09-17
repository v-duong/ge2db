import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import MonsterListTableRow from './MonsterListTableRow'

import styles from './MonsterListTable.css'

function MonsterListTable(props) {
  //TODO: find better solution for table
  var sub = [];
  var m = props.monsters;
  while (m.length){
    sub.push(m.splice(0,6))
  }
  return (
    <table className={styles.listTable}>
      <thead className={styles.listTableHead}>
        <tr>
          <th colSpan="6" className={styles.listTableCell}>{props.class}-sized</th>
        </tr>
      </thead>
      <tbody className={styles.listTableBody}>
        {sub.map(monsters =>(
          <MonsterListTableRow monsters={monsters} key={monsters[0].name}/>
        ))
        }
      </tbody>
    </table>
  );
}

MonsterListTable.propTypes = {
  monsters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default MonsterListTable;
