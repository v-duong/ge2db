import React, { PropTypes } from 'react';

import MonsterDetailTableHit from './MonsterDetailTable/MonsterDetailTableHit'

function MonsterDetailTable(props) {
  return (
    <div className="listView">
    <table>
      <thead>
        <tr>
          <th></th>
          <th colSpan="2">Bullet</th>
          <th colSpan="3">Melee</th>
        </tr>
        <tr>
          <th></th>
          <th>Crush</th>
          <th>Pierce</th>
          <th>Slash</th>
          <th>Crush</th>
          <th>Pierce</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(props.monster.parts).map(part => (
            <MonsterDetailTableHit
              part={props.monster.parts[part]}
              key={props.monster.parts[part].name}
            />
          )
        )
        }
      </tbody>
      </table>
    </div>
  );
}

MonsterDetailTable.propTypes = {
  monster: PropTypes.shape({
    name: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired
  }).isRequired,
};

export default MonsterDetailTable;
