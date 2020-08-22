import {apiUrl} from '../url/apiUrl';
import axios from 'axios';

export const movieService = {
    getLatest,
    getUpcoming,
    getDetails
};

function getLatest() {
    return axios.get(`${apiUrl.url}/latest`)
    .then(response => {
        return response
    })
    .catch(error => {
        return Promise.reject(error);
    });
}

function getUpcoming() {
    return axios.get(`${apiUrl.url}/upcomingMovies`)
    .then(response => {
        return response
    })
    .catch(error => {
        return Promise.reject(error);
    });
}

function getDetails(id) {
    return axios.get(`${apiUrl.url}/latest/${id}`)
    .then(response => {
        return response
    })
    .catch(error => {
        return Promise.reject(error);
    });
}

