import {apiUrl} from '../url/apiUrl';
import axios from 'axios';

export const eventService = {
    getEvents
};

function getEvents() {
    return axios.get(`${apiUrl.url}/events`)
    .then(response => {
        return response
    })
    .catch(error => {
        return Promise.reject(error);
    });
}

