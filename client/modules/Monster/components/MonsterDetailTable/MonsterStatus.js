import React, { PropTypes , Component} from 'react';

import styles from '../MonsterDetail.css'

function MonsterStatus(props) {
  console.log(props)
    return (
      <div>
        <h3>Inflicted Status</h3>
        <table className={styles.hitTable}>
           <thead>
              <tr>
                <th>Type</th>
                <th>Initial Value</th>
                <th>Added</th>
                <th>Duration (Total Damage)</th>
              </tr>
           </thead>
           <tbody>
             <tr>
               <td>Venom</td>
               <td>{props.status.poison.val}</td>
               <td>{props.status.poison.addval}</td>
               <td>{props.status.poison.time / 30}s ({props.status.poison.down * 100}% of Max HP)</td>
             </tr>
             <tr>
               <td>Hold</td>
               <td>{props.status.hold.val}</td>
               <td>{props.status.hold.addval}</td>
               <td>{props.status.hold.time / 30}s</td>
             </tr>
             <tr>
               <td>Bind</td>
               <td>{props.status.bind.val}</td>
               <td>{props.status.bind.addval}</td>
               <td>{props.status.bind.time / 30}s</td>
             </tr>
           </tbody>
        </table>
        </div>
      );
}

export default MonsterStatus;
