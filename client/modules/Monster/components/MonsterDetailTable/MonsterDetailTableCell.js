import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from '../MonsterDetail.css'

function getString(num){
  if (num == 0)
    return '××'
  else if (num == 1)
    return '×'
  else if (num == 2)
    return '-'
  else if (num == 3)
    return '◎'
  else if (num == 4)
    return '◎◎'
  else if (num > 4)
    return num
}

function getStyle(num, e){
  if (num === '◎◎')
    return "grayzone"
  else if (num === '◎')
      return "greenzone"
  else if (num === '×')
      return e + "1"
  else if (num === '××')
      return e + "0"
  else if (num === '-')
      return "x"
  if (num <= 30)
    return "critzone"
  if (num <= 60)
    return "redzone"
  if (num <= 85)
    return "greenzone"
  else
    return "grayzone"
}

function MonsterDetailTableCell(props) {
  var val = getString(props.val)
  var sty = getStyle(val, props.e);
    return (
          <td className={styles[sty]}>{val}</td>
    );
}

export default MonsterDetailTableCell;
