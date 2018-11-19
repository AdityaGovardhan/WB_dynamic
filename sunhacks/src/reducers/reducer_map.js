//importing data from action creator
import { FETCH_DATA } from '../actions';

export default function(state = [], action) {
  console.log('Action received', action);
  switch (action.type) {
    case FETCH_DATA:
      return action.payload.fetchData;
    default:
      return state;
  }
}
