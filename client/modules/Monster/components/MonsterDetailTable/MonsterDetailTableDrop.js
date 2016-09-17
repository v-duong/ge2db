import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import MonsterDropTable from './MonsterDropTable'

function MonsterDetailTableDrop(props) {
  var keys = Object.keys(props.drops)
  keys.sort();
  return (
    <div>
      {
        keys.map(tier => (
          <MonsterDropTable
            items={props.drops[tier].items}
            tier={props.drops[tier].tier}
            key={props.drops[tier].tier}
          />
        )
      )
      }
    </div>
  );
}

MonsterDetailTableDrop.propTypes = {
  drops: PropTypes.object.isRequired,
};

export default MonsterDetailTableDrop;
