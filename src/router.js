import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "./views/home/index";
export default new Router({
    routes: [
        {
            path: '/',
            mode:'history',
            base:'/businessnavigator/',
            component: Home,
            meta: {title: '主页'},
            redirect: 'home',
        },
        {
            path: '/home',
            title: 'home',
            component: Home,
        },

        {
            path: '/cate/cate1',
            name: 'cate1',
            component: () => import('./views/cate/cate1/index'),
        },
        {
            path: '/cate/cate2',
            name: 'cate2',
            component: () => import('./views/cate/cate2/index'),
        },
        {
            path: '/content/content11',
            name: 'content11',
            component: () => import('./views/content/content11/index'),
        },
        {
            path: '/content/content12',
            name: 'content12',
            component: () => import('./views/content/content12/index'),
        },
        {
            path: '/content/content13',
            name: 'content13',
            component: () => import('./views/content/content13/index'),
        },
        {
            path: '/content/content14',
            name: 'content14',
            component: () => import('./views/content/content14/index'),
        },
        {
            path: '/content/content15',
            name: 'content15',
            component: () => import('./views/content/content15/index'),
        },
        {
            path: '/content/content16',
            name: 'content16',
            component: () => import('./views/content/content16/index'),
        },
        {
            path: '/content/content21',
            name: 'content21',
            component: () => import('./views/content/content21/index'),
        },
        {
            path: '/content/content22',
            name: 'content22',
            component: () => import('./views/content/content22/index'),
        },
        {
            path: '/content/content23',
            name: 'content23',
            component: () => import('./views/content/content23/index'),
        },
        {
            path: '/content/content24',
            name: 'content24',
            component: () => import('./views/content/content24/index'),
        },
        {
            path: '/content/content25',
            name: 'content25',
            component: () => import('./views/content/content25/index'),
        },
        {
            path: '/content/content26',
            name: 'content26',
            component: () => import('./views/content/content26/index'),
        },
        {
            path: '/content/content27',
            name: 'content27',
            component: () => import('./views/content/content27/index'),
        },
        {
            path: '/content/content28',
            name: 'content28',
            component: () => import('./views/content/content28/index'),
        },
        {
            path: '/content/content29',
            name: 'content29',
            component: () => import('./views/content/content29/index'),
        },
    ]

})
