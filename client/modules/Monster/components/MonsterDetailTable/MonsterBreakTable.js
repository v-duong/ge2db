import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from '../MonsterDetail.css'

function MonsterBreakTableItem(props){

}

function MonsterBreakTable2(props){
  var keys = Object.keys(props.breaks.parts)
  var name = "Difficulty ";
  if(props.tier == 1)
    name += "1-3"
  else if(props.tier == 2)
    name += "4-6"
  else if(props.tier == 3)
    name += "7-8"
  else if(props.tier == 4)
    name += "9-11"
  else if(props.tier == 5)
    name += "12-13"
  else if(props.tier == 6)
    name += "14-15"
  return (
    <table className={styles.dropTable}>
      <thead>
        <tr>
         <th colSpan="2">{name}</th>
        </tr>
      </thead>
      <tbody>
        {
        keys.map(part => {
          var r = []
          var plen = props.breaks.parts[part].items.length
          r.push(props.breaks.parts[part].items.map((item, i) => {
            if (i == 0 && plen == 1)
              return <tr><td rowSpan={plen} className={styles.tline}>{props.breaks.parts[part].name}</td><td className={styles.tline}><Link to={"/item/" + item}>{item}</Link></td></tr>
            else if (i == 0)
              return <tr><td rowSpan={plen} className={styles.tline}>{props.breaks.parts[part].name}</td><td><Link to={"/item/" + item}>{item}</Link></td></tr>
            else if (i == plen - 1)
              return <tr><td className={styles.tline}><Link to={"/item/" + item}>{item}</Link></td></tr>
            else
              return <tr><td><Link to={"/item/" + item}>{item}</Link></td></tr>
          }))
          return r
        })
        }
      </tbody>
    </table>
  )
}


function MonsterBreakTable(props) {
  var keys = Object.keys(props.breaks)
  keys.sort();
    return (
      <div>
        <h3>Break Drops</h3>
          {
            keys.map(tier => {
              if (props.breaks[tier].parts.length != 0)
                return <MonsterBreakTable2
                  breaks={props.breaks[tier]}
                  tier={props.breaks[tier].tier}
                  key={props.breaks[tier].tier}
                />
            }
          )
          }
    </div>
    );
}


export default MonsterBreakTable;
