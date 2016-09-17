import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './MonsterListTable.css'

function MonsterListTableRow(props) {
  return (
    <tr>
      {
        props.monsters.map(monster => (
          <td key={monster.name} className={styles.listTableCell}>
            <Link to={`/monster/${monster.name}`} >
              {monster.name}
            </Link>
          </td>
        ))
      }
    </tr>
  );
}

MonsterListTableRow.propTypes = {
  monsters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default MonsterListTableRow;
