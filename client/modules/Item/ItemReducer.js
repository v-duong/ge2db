import { ADD_ITEM } from './ItemActions';

// Initial State
//const initialState = { data: {'name': 'Imploder', 'drop': ['Vajra']} };
const initialState = { data: [] };

const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        data: action.item,
      };

    default:
      return state;
  }
};


export const getItem = (state, name) => {
  if (state.item.data)
    if (state.item.data.name === name)
      return state.item.data

  return {}
}

// Export Reducer
export default ItemReducer;
