import {
  ADD_MONSTER,
  ADD_MONSTERS
} from './MonsterActions';

// Initial State
const initialState = {
  data: []
};

const MonsterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MONSTER:
      // TODO: Better way to do this?
      if (state.data != []) {
        var f = 0;
        state.data.map(monster => {
          if (monster)
            if (monster.name === action.monster.name) {
              state.data[state.data.indexOf(monster)] = action.monster
              f = 1;
            }
        })
        if (f)
          return {
            data: state.data,
          };
        else
          return {
            data: [action.monster, ...state.data],
          };
      } else {
        return {
          data: [action.monster, ...state.data],
        };
      }


    case ADD_MONSTERS:
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
  if (monster.drops != null)
    return monster.name === name
  return false
})[0];


// Export Reducer
export default MonsterReducer;
