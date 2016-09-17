import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from '../MonsterDetail.css'

function MonsterDropTable(props) {
  //TODO: do this with a better way?
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
  if(props.items){
    return (
      <table className={styles.dropTable}>
        <thead>
          <tr>
           <th>{name}</th>
          </tr>
        </thead>
        <tbody>
          {
            props.items.map(i => {
              var s = "/item/" + i;
              return <tr key={i}><td><Link to={s}>{i}</Link></td></tr>
            }
          )
          }
        </tbody>
      </table>
    )
  }
  else
    return (
      <table className={styles.dropTable}>
        <thead>
          <tr>
           <th>{name}</th>
          </tr>
        </thead>
      </table>
    );
}

MonsterDropTable.propTypes = {

};

export default MonsterDropTable;
