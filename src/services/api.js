import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://kleber2732.c34.integrator.host:4829',
    baseURL: 'http://localhost:8004',
});

export default api;