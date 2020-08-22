import { constants } from '../constants/allConstants';

const initialState = {
  events:[]
}

export function eventReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_EVENTS_SUCCESS:
      return {
        ...state,
        latest: action.list
      };
    case constants.GET_EVENTS_FAILURE:
      return {
        ...state,
        latest:[]
      };
    default:
      return state
  }
}