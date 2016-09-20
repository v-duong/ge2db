import React, { PropTypes } from 'react';

import MonsterDetailTableDrop from './MonsterDetailTable/MonsterDetailTableDrop'
import MonsterHit from './MonsterDetailTable/MonsterHit'


import styles from './MonsterDetail.css'

function MonsterDetailTable(props) {
  return (
    <div className="listView">
      <MonsterHit monster={props.monster}/>
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
