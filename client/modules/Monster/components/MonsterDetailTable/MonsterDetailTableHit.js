import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from '../MonsterDetail.css'
import MonsterDetailTableCell from './MonsterDetailTableCell'




function MonsterDetailTableHit(props) {


  if (props.part.damagezone)
    return (
        <tr>
          <td>{props.part.name}</td>
          <MonsterDetailTableCell val={props.part.damagezone[props.type].bCrush}/>
          <MonsterDetailTableCell val={props.part.damagezone[props.type].bPierce}/>
          <MonsterDetailTableCell val={props.part.damagezone[props.type].mSlash}/>
          <MonsterDetailTableCell val={props.part.damagezone[props.type].mCrush}/>
          <MonsterDetailTableCell val={props.part.damagezone[props.type].mPierce}/>
          <MonsterDetailTableCell val={props.part.damagezone[props.type].eBlaze} e="Blaze"/>
          <MonsterDetailTableCell val={props.part.damagezone[props.type].eFreeze} e="Freeze"/>
          <MonsterDetailTableCell val={props.part.damagezone[props.type].eSpark} e="Spark"/>
          <MonsterDetailTableCell val={props.part.damagezone[props.type].eGod} e="God"/>
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
