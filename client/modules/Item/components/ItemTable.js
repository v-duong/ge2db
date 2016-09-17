import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function ItemTable(props){
  return(
    <table>
      <thead>
        <tr><th>Drops From</th></tr>
      </thead>
      <tbody>
      {
        props.item.drop.map(monster => {
          var str = "/monster/" + monster
          return <tr key={monster}><td><Link to={str} >{monster}</Link></td></tr>
        }
      )
      }
    </tbody>
    </table>
  )
}
export default ItemTable;
