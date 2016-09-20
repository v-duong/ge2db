import React, { PropTypes , Component} from 'react';

import styles from '../MonsterDetail.css'
import MonsterDetailTableHit from './MonsterDetailTableHit'

class MonsterHit extends Component {

  state={type: 'normal'};

  handleClick = (s) => {
    this.setState({type: s})
  };

  render() {
    var t=this;
    return (
      <div>
            <h3>Monster Defense Values</h3>
            <ul className={styles.nav}>
              <li><a className={this.state.type === 'normal' ? styles.navactive : styles.navinactive} onClick={() => t.handleClick("normal")}>Normal</a></li>
              <li><a className={this.state.type === 'broken' ? styles.navactive : styles.navinactive}  onClick={() => t.handleClick("broken")}>Broken</a></li>
              <li><a className={this.state.type === 'rage' ? styles.navactive : styles.navinactive}  onClick={() => t.handleClick("rage")}>Rage</a></li>
              <li><a className={this.state.type === 'ragebroken' ? styles.navactive : styles.navinactive}  onClick={() => t.handleClick("ragebroken")}>Rage+Broken</a></li>
            </ul>
        <table className={styles.hitTable}>
          <thead>
            <tr>
              <th className={styles.hitTablePart}></th>
              <th colSpan="2">Bullet</th>
              <th colSpan="3">Melee</th>
              <th colSpan="4">Element</th>
            </tr>
            <tr>
              <th>Part</th>
              <th>Crush</th>
              <th>Pierce</th>
              <th>Slash</th>
              <th>Crush</th>
              <th>Pierce</th>
              <th>Blaze</th>
              <th>Freeze</th>
              <th>Spark</th>
              <th>Divine</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(this.props.monster.parts).map(part => (
                <MonsterDetailTableHit
                  part={this.props.monster.parts[part]}
                  key={this.props.monster.parts[part].name}
                  type={this.state.type}
                />
              )
            )
            }
          </tbody>
        </table>
        </div>
      );
  }
}

export default MonsterHit;
