import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'
//Vue.prototype.$axios = axios

// axios.interceptors.request.use(config =>{
//     config.headers.token = localStorage.getItem('token');
//     return config;
// })
createApp(App).use(router).mount('#app')
