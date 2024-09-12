import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from './components/Home.vue';
import Contact from './components/Contact.vue';

const routes = [
    {path: '/', component: Home},
    {path: '/contact', component: Contact}
]
const router = createRouter({
    history: createWebHistory(),
    routes
}
    
)

const app = createApp(App)
app.use(router)
app.mount('#app')
