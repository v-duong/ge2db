import callApi from '../../util/apiCaller';

export const ADD_ITEM = 'ADD_ITEM';

// Export Actions
export function addItem(item) {
  return {
    type: ADD_ITEM,
    item,
  };
}

export function fetchItem(name) {
  return (dispatch) => {
    return callApi(`item/${name}`).then(res => dispatch(addItem(res.item)));
  };
}
