import axios from 'axios'

const instance = axios.create({
    // baseURL: 'https://prj.inf.saihs.edu.tw:8787/api',
    baseURL: 'http://192.168.212.116:3000/api',
    // baseURL: 'http://203.64.47.60:8787/api',
    // baseURL: 'http://localhost:3000/api',
    headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
    },
})

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.token = `${token}`
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    return Promise.reject(error)
})


export default instance;