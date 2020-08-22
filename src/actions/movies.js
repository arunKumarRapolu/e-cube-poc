import { constants } from '../constants/allConstants.js';
import { movieService } from '../services/userServices';


export const movies = {
    getLatest
};

function getLatest() {
    
    return dispatch => {
        return movieService.getLatest()
            .then(
                data => { 
                    dispatch(success(data));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function success(user) { return { type: constants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: constants.LOGIN_FAILURE, error } }
}