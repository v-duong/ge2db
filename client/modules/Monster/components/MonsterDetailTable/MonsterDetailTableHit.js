import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function MonsterDetailTableHit(props) {
  if (props.part.damagezone)
    return (
        <tr>
          <td>{props.part.name}</td>
          <td>{props.part.damagezone.normal.bCrush}</td>
          <td>{props.part.damagezone.normal.bPierce}</td>
          <td>{props.part.damagezone.normal.mSlash}</td>
          <td>{props.part.damagezone.normal.mCrush}</td>
          <td>{props.part.damagezone.normal.mPierce}</td>
        </tr>
    );
  else
    return (
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
    );
}

MonsterDetailTableHit.propTypes = {
  part: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
};

export default MonsterDetailTableHit;
