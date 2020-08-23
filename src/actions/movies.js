import { constants } from '../constants/allConstants.js';
import { movieService } from '../services/movie';

export const movies = {
    getLatest,
    getUpcoming,
    getDetails,
    saveBookingInfo,
    saveUserSelects,
    setlatestMovies,
    setUpcomingMovies
};

function getLatest() {
    
    return dispatch => {
        movieService.getLatest()
            .then(
                data => { 
                    dispatch(success(data.data));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function success(list) { return { type: constants.GET_LATEST_SUCCESS, list } }
    function failure(error) { return { type: constants.GET_LATEST_FAILURE, error } }
}

function getUpcoming() {
    
    return dispatch => {
        movieService.getUpcoming()
            .then(
                data => { 
                    dispatch(success(data.data));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function success(list) { return { type: constants.GET_UPCOMING_SUCCESS, list } }
    function failure(error) { return { type: constants.GET_UPCOMING_FAILURE, error } }
}

function getDetails(id) {
    
    return dispatch => {
        movieService.getDetails(id)
            .then(
                data => { 
                    dispatch(success(data.data));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function success(data) { return { type: constants.GET_DETAILS_SUCCESS, data } }
    function failure(error) { return { type: constants.GET_DETAILS_FAILURE, error } }
}

function saveBookingInfo(data){
    return { type: constants.SAVE_BOOKING_INFO, data }
}

function saveUserSelects(data){
    return { type: constants.SAVE_USER_SELECTS, data }
}

function setlatestMovies(list){
    return { type: constants.SET_LATEST_MOVIES, list }
}

function setUpcomingMovies(list){
    return { type: constants.SET_UPCOMING_MOVIES, list }
}