import { combineReducers } from 'redux';
import {movieReducer} from './movieReducer';
import {eventReducer} from './eventReducer';

const rootReducer = combineReducers({
  movieReducer,
  eventReducer
});

export default rootReducer;