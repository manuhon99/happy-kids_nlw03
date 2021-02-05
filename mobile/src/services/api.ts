import axios from 'axios';

const api = axios.create({
    baseURL: 'httt://192.168.0.10:3333',
});

export default api