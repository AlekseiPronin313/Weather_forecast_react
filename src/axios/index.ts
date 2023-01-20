import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
});

api.interceptors.request.use(config => {
    config.url =
        config.url + '&units=metric' + '&appid=' + 'a433ae7218d2a734f6a3e35651801479';
    return config;
});

export default api;
