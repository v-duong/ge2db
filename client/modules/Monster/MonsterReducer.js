import { ADD_MONSTER, ADD_MONSTERS } from './MonsterActions';

// Initial State
const initialState = { data: [] };

const MonsterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MONSTER :
      return {
        data: [action.monster, ...state.data],
      };

    case ADD_MONSTERS :
      return {
        data: action.monsters,
      };

    default:
      return state;
  }
};

/* Selectors */

export const getMonsters = state => state.monsters.data

//export const getMonster = (state, name) => state.monster.data

export const getMonster = (state, name) => state.monsters.data.filter(monster => {
  if (monster != null)
    return monster.name === name
  else
    return {}
})[0];


// Export Reducer
export default MonsterReducer;
