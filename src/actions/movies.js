import { constants } from '../constants/allConstants.js';
import { movieService } from '../services/movie';

export const movies = {
    getLatest,
    getUpcoming,
    getDetails,
    saveBookingInfo,
    saveUserSelects,
    setlatestMovies,
    setUpcomingMovies,
    savePage
};

function getLatest() {
    
    return dispatch => {
        dispatch(showLoader());
        dispatch(success([]));
        movieService.getLatest()
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

    function success(list) { return { type: constants.GET_LATEST_SUCCESS, list } }
    function failure(error) { return { type: constants.GET_LATEST_FAILURE, error } }
    function showLoader() { return { type: constants.SHOW_LOADER } }
    function hideLoader() { return { type: constants.HIDE_LOADER } }
}

function getUpcoming() {
    
    return dispatch => {
        dispatch(showLoader());
        dispatch(success([]));
        movieService.getUpcoming()
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

    function success(list) { return { type: constants.GET_UPCOMING_SUCCESS, list } }
    function failure(error) { return { type: constants.GET_UPCOMING_FAILURE, error } }
    function showLoader() { return { type: constants.SHOW_LOADER } }
    function hideLoader() { return { type: constants.HIDE_LOADER } }
}

function getDetails(id) {
    
    return dispatch => {
        dispatch(showLoader());
        dispatch(success([]));
        movieService.getDetails(id)
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

    function success(data) { return { type: constants.GET_DETAILS_SUCCESS, data } }
    function failure(error) { return { type: constants.GET_DETAILS_FAILURE, error } }
    function showLoader() { return { type: constants.SHOW_LOADER } }
    function hideLoader() { return { type: constants.HIDE_LOADER } }
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

function savePage(page){
    return { type: constants.SAVE_PAGE, page }
}