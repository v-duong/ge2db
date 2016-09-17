import React, { PropTypes } from 'react';

import MonsterDetailTableHit from './MonsterDetailTable/MonsterDetailTableHit'
import MonsterDetailTableDrop from './MonsterDetailTable/MonsterDetailTableDrop'

import styles from './MonsterDetail.css'

function MonsterDetailTable(props) {
  return (
    <div className="listView">
      <table className={styles.hitTable}>
        <thead>
          <tr >
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
      <MonsterDetailTableDrop
        drops={props.monster.drops}
        key="items"
      />
    </div>
  );
}

MonsterDetailTable.propTypes = {
  monster: PropTypes.shape({
    name: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
    parts: PropTypes.object.isRequired,
    drops: PropTypes.object.isRequired
  }).isRequired,
};

export default MonsterDetailTable;
