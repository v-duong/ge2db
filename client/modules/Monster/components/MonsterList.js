import React, { PropTypes } from 'react';

import MonsterListTable from './MonsterListTable/MonsterListTable'

function MonsterList(props) {
  var small = [], mid = [], large = [];
  props.monsters.map(monster => {
    if (monster.class == 'Small')
      small.push(monster)
    else if (monster.class == 'Medium')
      mid.push(monster)
    else
      large.push(monster)
  });
  return (
    <div>
          <MonsterListTable
            monsters={small}
            class="Small"
            key="small"
          />
          <MonsterListTable
            monsters={mid}
            class="Mid"
            key="mid"
          />
          <MonsterListTable
            monsters={large}
            class="Large"
            key="large"
          />
    </div>
  );
}

MonsterList.propTypes = {
  monsters: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
  })).isRequired,
};

export default MonsterList;
