import { constants } from '../constants/allConstants.js';
import { eventService } from '../services/events';

export const events = {
    getEvents,
    setEvents
};

function getEvents() {
    
    return dispatch => {
        dispatch(showLoader());
        dispatch(success([]));
        eventService.getEvents()
            .then(
                data => {
                    dispatch(hideLoader());
                    dispatch(success(data.data));
                },
                error => {
                    dispatch(hideLoader());
                    dispatch(failure(error));
                }
            );
    };

    function success(list) { return { type: constants.GET_EVENTS_SUCCESS, list } }
    function failure(error) { return { type: constants.GET_EVENTS_FAILURE, error } }
    function showLoader() { return { type: constants.SHOW_LOADER } }
    function hideLoader() { return { type: constants.HIDE_LOADER } }
}

function setEvents(list){
    return { type: constants.SET_EVENTS, list }
}