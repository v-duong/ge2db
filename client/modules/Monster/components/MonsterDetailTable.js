import React, { PropTypes } from 'react';

import MonsterDetailTableDrop from './MonsterDetailTable/MonsterDetailTableDrop'
import MonsterHit from './MonsterDetailTable/MonsterHit'
import MonsterBreakTable from './MonsterDetailTable/MonsterBreakTable'


import styles from './MonsterDetail.css'

function MonsterDetailTable(props) {
  var breaks = ""
  if (props.monster && props.monster.breaks)
    breaks = <MonsterBreakTable breaks={props.monster.breaks}/>
  return (
    <div className="listView">
      <MonsterHit monster={props.monster}/>
      <MonsterDetailTableDrop
        drops={props.monster.drops}
        key="items"
      />
    {breaks}
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
