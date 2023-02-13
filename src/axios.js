import axios from 'axios';

const instance = axios.create({
    baseUrl: '...'//the api (cloud function url)
});

export default instance