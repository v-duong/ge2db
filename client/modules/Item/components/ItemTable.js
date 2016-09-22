import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from '../Item.css'

function ItemTable(props){
  return(
    <table className={styles.itemTable}>
      <tbody>
      {
        props.item.drop.devour.map(dev => {
          var str = "/monster/" + dev.monster
          return <tr key={dev.monster + dev.diff.substring(dev.diff.length - 1) + 'd'}><td><Link to={str} >{dev.monster}</Link></td><td>Devour</td><td>{dev.diff}</td></tr>
        }
      )
      }
      {
        props.item.drop.break.map(brk => {
          var str = "/monster/" + brk.monster
          return <tr key={brk.monster + brk.diff.substring(brk.diff.length - 1) + 'b'}><td><Link to={str} >{brk.monster}</Link></td><td>Break {brk.part}</td><td>{brk.diff}</td></tr>
        }
      )
      }
    </tbody>
    </table>
  )
}
export default ItemTable;
