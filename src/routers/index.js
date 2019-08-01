import Vue from 'vue';

// 引入router 插件
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 引入单页面组件
// import Home from '../views/Home.vue';
import Detail from '../views/Detail.vue';

import FootNav from '../views/FootNav.vue';
import Home from '../views/Homes/Home.vue';

let router = new VueRouter({
    routes: [
        // 重定向 ，默认打开首页
        {
            path: ' / ',
            redirect: ' /footNav/home '
            // 传参：{name：' Home ' ，query：{username: ' yujian '}}
        },
        {
            name: 'FootNav',
            path: '/footNav',
            component:  FootNav,
            children: [
                {
                    name: 'Home',
                    path: 'home',
                    component:  Home,
                },
                {
                    name: 'List',
                    path: 'list',
                    component: () => import( /* webpackChunkName: "about" */ '../views/List.vue'),
                },{
                    name: 'Cart',
                    path: 'cart',
                    component: () => import( /* webpackChunkName: "about" */ '../views/Cart.vue')
                },{
                    name: 'Mine',
                    path: 'mine',
                    component: () => import( /* webpackChunkName: "about" */ '../views/Mine.vue'),
                }
            ]

        },
        // {
        //     name: 'Home',
        //     path: 'home',
        //     component:  Home,
        // },
        // {
        //     name: 'List',
        //     path: '/list',
        //     component:  FootNav,
            
        // },
        {
            name: 'Detail',
            path: '/detail/:id/:name',
            component: Detail
        }
    ]
})

export default router;