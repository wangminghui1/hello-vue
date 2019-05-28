import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)


const routes = [
    {
        path: "/login",
        name: 'login',
        component: () => import("../components/login/index")
    },
    {
        path:"/",
        redirect:"/index"
    }
    ,
    {
        path: "/index",
        name : "index",
        component: () => import('@/layout/index.vue'),
        redirect: "/dashboard",
        children: [{
            path: "/dashboard",
            name: "Dashboard",
            component: () => import("@/components/HelloWorld.vue")
        },
        {
            path: '/404',
            name:"404",
            component: () => import('@/components/404'),
            hidden: true
        },
        {
            path: "/hello",
            name: "hello",
            component: () => import("../components/HelloWorld")
        },
        {
            path: "/home",
            name: "home",
            component: () => import("../components/HelloWorld"),
            children : [
                
            ]
        },
        {
            path:"/table:name",
            name : "table",
            component : ()=> import("../components/tables/index")
        }
        ]
    },
    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }

]

const router = new VueRouter({
    routes: routes
})



export default router;