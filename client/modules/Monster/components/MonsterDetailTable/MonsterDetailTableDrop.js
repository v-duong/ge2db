import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import MonsterDropTable from './MonsterDropTable'

function MonsterDetailTableDrop(props) {
  var keys = Object.keys(props.drops)
  keys.sort();
  return (
    <div>
      <h3>Devour Drops</h3>
      {
        keys.map(tier => {
          if (props.drops[tier].items.length != 0)
          return <MonsterDropTable
            items={props.drops[tier].items}
            tier={props.drops[tier].tier}
            key={props.drops[tier].tier}
          />
        }
      )
      }
    </div>
  );
}

MonsterDetailTableDrop.propTypes = {
  drops: PropTypes.object.isRequired,
};

export default MonsterDetailTableDrop;
