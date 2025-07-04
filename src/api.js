import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cryptoapi-1-c7wy.onrender.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

// Attach token to every request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
