import { ADD_ITEM } from './ItemActions';

// Initial State
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


export const getItem = state => state.item.data

// Export Reducer
export default ItemReducer;
