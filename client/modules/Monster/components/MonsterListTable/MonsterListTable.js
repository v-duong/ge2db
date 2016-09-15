import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import MonsterListTableRow from './MonsterListTableRow'


function MonsterListTable(props) {
  //TODO: find better solution for table
  var sub = [];
  var m = props.monsters;
  while (m.length){
    sub.push(m.splice(0,6))
  }
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="6">{props.class}-sized</th>
        </tr>
      </thead>
      <tbody>
        {sub.map(monsters =>(
          <MonsterListTableRow monsters={monsters}/>
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
