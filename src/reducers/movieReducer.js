import { constants } from '../constants/allConstants';

const initialState = {
  latest:[],
  latestCopy:[],
  upComing:[],
  upComingCopy:[],
  details:{},
  movieInfo:{},
  userSelectedInfo:{}
}

export function movieReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_LATEST_SUCCESS:
      return {
        ...state,
        latest: action.list,
        latestCopy: action.list
      };
    case constants.GET_LATEST_FAILURE:
      return {
        ...state,
        latest:[],
        latestCopy:[]
      };
    case constants.GET_UPCOMING_SUCCESS:
    return {
        ...state,
        upComing: action.list,
        upComingCopy:action.list
    };
    case constants.GET_UPCOMING_FAILURE:
    return {
        ...state,
        upComing:[],
        upComingCopy:[]
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
    case constants.SET_LATEST_MOVIES:
    return {
        ...state,
        latest: action.list
    };
    case constants.SET_UPCOMING_MOVIES:
      return {
          ...state,
          upComing: action.list
      };
    default:
      return state
  }
}