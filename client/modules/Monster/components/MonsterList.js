import React, { PropTypes } from 'react';

import MonsterListItem from './MonsterListItem/MonsterListItem'

function MonsterList(props) {
  return (
    <div className="listView">
      {
        props.monsters.map(monster => (
          <MonsterListItem
            monster={monster}
            key={monster.name}
          />
        ))
      }
    </div>
  );
}

MonsterList.propTypes = {
  monsters: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
  })).isRequired,
};

export default MonsterList;
