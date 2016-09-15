import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function MonsterListItem(props) {
  return (
    <div>
      <h3>
        <Link to={`/monster/${props.monster.name}`} >
          {props.monster.name}
        </Link>
      </h3>
    </div>
  );
}

MonsterListItem.propTypes = {
  monster: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default MonsterListItem;
