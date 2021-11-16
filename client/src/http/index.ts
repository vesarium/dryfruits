import axios from 'axios';

export const API_URL = `http://192.168.0.228:1337/api` 

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    console.log('config' + config);
    return config;
})

export default $api;