import { combineReducers } from 'redux';
import fetchData from './reducer_map';

const rootReducer = combineReducers({
  data: fetchData
});

export default rootReducer;
