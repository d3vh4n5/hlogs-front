import { createWebHistory , createRouter } from 'vue-router'

import App from './App.vue'
import { routes as dashboardRoutes } from './modules/dashboard/router'
import Login from './modules/auth/Login.vue'
import Register from './modules/auth/Register.vue'
import Home from './components/Home.vue'
import DashboardLayout from './modules/dashboard/components/DashboardLayout.vue'
import NotFound from './components/NotFound.vue'

const routes = [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '',
                component: Home
            }
        ]
    },
    {
        path: '/auth',
        children: [
            {
                path: 'login',
                component: Login
            },
            {
                path: 'register',
                component: Register
            },
        ]
    },
    {
        path: '/dashboard',
        component: DashboardLayout,
        children: [
            ...dashboardRoutes
        ]
    },

    // 404 Not Found de la documentacion oficial
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})