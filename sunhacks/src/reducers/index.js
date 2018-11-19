import { combineReducers } from 'redux';
import fetchData from './reducer_map';

const rootReducer = combineReducers({
  fetchData: fetchData
});

export default rootReducer;
