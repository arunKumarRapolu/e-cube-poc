import { combineReducers } from 'redux';
import {movieReducer} from './movieReducer';
import {eventReducer} from './eventReducer';
import {loaderReducer} from './loaderReducer'

const rootReducer = combineReducers({
  movieReducer,
  eventReducer,
  loaderReducer
});

export default rootReducer;