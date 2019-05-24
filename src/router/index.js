import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)


const routes = [
    {
        path: "/login",
        name: 'login',
        component : ()=> import("../components/login/index")
    },
    {
        path:"/hello",
        name:"hello",
        component :()=> import("../components/HelloWorld")
    },
    {
        path:"/",
        component : ()=>import('@/layout/index.vue'),
        redirect :"/dashboard",
        children:[{
            path:"dashboard",
            name : "Dashboard",
            component : ()=> import("@/components/HelloWorld.vue")
        }]
    },
    {
        path:"/home",
        name:"home",
        component: ()=> import("../layout/index")
    },
    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
    ,
    {
        path: '/404',
        component: () => import('@/components/404'),
        hidden: true
    },
]

const router = new VueRouter({
    routes : routes
})


export default router;