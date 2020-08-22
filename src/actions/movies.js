import { constants } from '../constants/allConstants.js';
import { movieService } from '../services/movie';

export const movies = {
    getLatest,
    getUpcoming,
    getMovieDetails
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

function getMovieDetails(id) {
    
    return dispatch => {
        movieService.getMovieDetails(id)
            .then(
                data => { 
                    dispatch(success(data.data));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function success(list) { return { type: constants.GET_DETAILS_SUCCESS, list } }
    function failure(error) { return { type: constants.GET_DETAILS_FAILURE, error } }
}