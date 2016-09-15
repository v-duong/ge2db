import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function MonsterListTableRow(props) {
  return (
    <tr>
      {
        props.monsters.map(monster => (
          <td key={monster.name}>
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
