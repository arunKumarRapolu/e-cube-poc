import { constants } from '../constants/allConstants';

const initialState = {
  showLoader:false
}

export function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SHOW_LOADER:
      return {
        ...state,
        showLoader: true
      };
    case constants.HIDE_LOADER:
      return {
        ...state,
        showLoader: false
      };
    default:
      return state
  }
}