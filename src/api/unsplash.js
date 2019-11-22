import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 138d522fc5294f047fb346c50c3c9c944b166fc085568b2d52bdc3fc33bd9ce8'
    }
});