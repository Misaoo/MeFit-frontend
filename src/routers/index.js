import Vue from 'vue';
import Router from 'vue-router' 

import home from '@/components/Home'
import login from '@/components/Login'
import register from '@/components/Register'

Vue.use(Router)

export default new Router ({

    routes: [
        {
            path: "/",
            name: "home",
            component: home
        },
        {
            path: "/login",
            name: "login",
            component: login
        },
        {
            path: "/register",
            name: "register",
            component: register
        },
        {
            path: "*",
            redirect:"/"
        }
    ]
});