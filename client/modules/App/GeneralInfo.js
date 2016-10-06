import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './App.css';


function GeneralInfo(props) {
  return (
      <div>
        <h3>Defense Tables</h3>
        <p>Each value indicates how much damage will be resisted for each damage type. In other words - bigger number means less damage inflicted.</p>
        <p>For elements × means weakness and ◎ means resistance.</p>
        <h3>Element Damage Multiplier</h3>
        <table className={styles.itable}>
          <thead>
            <tr>
              <th>Weapon Element Value</th>
              <th colSpan="5">Part Element Value</th>
            </tr>
            <tr>
              <th></th>
              <th>◎◎</th>
              <th>◎</th>
              <th>-</th>
              <th>×</th>
              <th>××</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>◎◎</td>
              <td>0.20</td>
              <td>0.80</td>
              <td>1.00</td>
              <td>1.50</td>
              <td>1.75</td>
            </tr>
            <tr>
              <td>◎</td>
              <td>0.20</td>
              <td>0.80</td>
              <td>1.00</td>
              <td>1.25</td>
              <td>1.50</td>
            </tr>
            <tr>
              <td>-</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
          </tbody>
        </table>
        <h3>Damage Formula</h3>
        <p>May not be entirely accurate due to either unknown factors or floating point rounding.</p>
        <p>Base Attack * Attack Modifiers * Damage Multipliers * Attack Value * ((100 - Target Defense Value) / 100)</p>
        <h4>Attack Modifiers</h4>
        <p>Skills or statuses that boost your weapon attack. Stacks additively.</p>
        <table className={styles.itable}>
          <thead>
            <tr>
              <th>Source</th>
              <th>Modifier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Skills: Melee Attack, All Out Attack, Survival Instinct, Adrenaline Rush, Melee Atk Specialist</td>
              <td>Skill Dependent</td>
            </tr>
            <tr>
              <td>Burst</td>
              <td>Lv1: +10%<br/>Lv2: +15%<br/>Lv3: +20%</td>
            </tr>
            <tr>
              <td>Attack Up Status</td>
              <td>Small: +5%<br/>Large: +10%</td>
            </tr>
            <tr>
              <td>Blood Rage</td>
              <td>+(God Arc Rage - 100)%</td>
            </tr>
            <tr>
              <td>Charge Spear - Charged State</td>
              <td>+20%</td>
            </tr>
          </tbody>
        </table>
        <h4>Damage Multipliers</h4>
        <p>Stacks multiplicatively.</p>
        <p>Sword Master: 1.5x on critical (white effect), 1.0x on red hit effect, 0.5x on green and below</p>
        <p>Hidden Attack: 3x</p>
        <p>Element Multiplier: See above</p>
        <h4>Attack Value</h4>
        <p>Each attack and Blood Art has a damage multiplier.</p>
      </div>
  );
}

export default GeneralInfo;
