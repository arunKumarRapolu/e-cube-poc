import { constants } from '../constants/allConstants';

const initialState = {
  latest:[],
  upComing:[],
  details:{},
  movieInfo:{},
  userSelectedInfo:{}
}

export function movieReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_LATEST_SUCCESS:
      return {
        ...state,
        latest: action.list
      };
    case constants.GET_LATEST_FAILURE:
      return {
        ...state,
        latest:[]
      };
    case constants.GET_UPCOMING_SUCCESS:
    return {
        ...state,
        upComing: action.list
    };
    case constants.GET_UPCOMING_FAILURE:
    return {
        ...state,
        upComing:[]
    };
    case constants.GET_DETAILS_SUCCESS:
    return {
        ...state,
        details: action.data
    };
    case constants.GET_DETAILS_FAILURE:
    return {
        ...state,
        details:{}
    };
    case constants.SAVE_BOOKING_INFO:
    return {
        ...state,
        movieInfo: action.data
    };
    case constants.SAVE_USER_SELECTS:
    return {
        ...state,
        userSelectedInfo: action.data
    };
    default:
      return state
  }
}