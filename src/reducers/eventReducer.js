import { constants } from '../constants/allConstants';

const initialState = {
  events:[],
  eventsCopy:[]
}

export function eventReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.list,
        eventsCopy: action.list
      };
    case constants.GET_EVENTS_FAILURE:
      return {
        ...state,
        events:[],
        eventsCopy:[]
      };
    case constants.SET_EVENTS:
      return {
        ...state,
        events:action.list
      };
    default:
      return state
  }
}