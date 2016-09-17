import React, { PropTypes } from 'react';
import { Link } from 'react-router';

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
    var item = props.items.split(", ")
    return (
      <table>
        <thead>
          <tr>
           <th>{name}</th>
          </tr>
        </thead>
        <tbody>
          {
            item.map(i => (
              <tr key={i}><td>{i}</td></tr>
            )
          )
          }
        </tbody>
      </table>
    )
  }
  else
    return (
      <table>
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
