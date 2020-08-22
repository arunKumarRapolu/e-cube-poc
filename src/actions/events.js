import { constants } from '../constants/allConstants.js';
import { eventService } from '../services/events';

export const movies = {
    getEvents
};

function getEvents() {
    
    return dispatch => {
        eventService.getEvents()
            .then(
                data => { 
                    dispatch(success(data.data));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function success(list) { return { type: constants.GET_EVENTS_SUCCESS, list } }
    function failure(error) { return { type: constants.GET_EVENTS_FAILURE, error } }
}