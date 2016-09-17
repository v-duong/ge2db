import callApi from '../../util/apiCaller';

export const ADD_MONSTER = 'ADD_MONSTER';
export const ADD_MONSTERS = 'ADD_MONSTERS';

// Export Actions
export function addMonster(monster) {
  return {
    type: ADD_MONSTER,
    monster,
  };
}
export function addMonsters(monsters) {
  return {
    type: ADD_MONSTERS,
    monsters,
  };
}

export function fetchMonsters() {
  return (dispatch) => {
    return callApi('monster').then(res => {
      dispatch(addMonsters(res.monsters));
    });
  };
}

export function fetchMonster(name) {
  return (dispatch) => {
    return callApi(`monster/${name}`).then(res => dispatch(addMonster(res.monster)));
  };
}
