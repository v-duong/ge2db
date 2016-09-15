/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import monsters from './modules/Monster/MonsterReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  monsters
});
