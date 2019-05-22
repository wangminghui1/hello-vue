import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)


const routes = [
    {
        path: "/login",
        name: 'login',
        component : ()=> import("../components/login/index")
    },{
        path:"/hello",
        name:"hello",
        component :()=> import("../components/HelloWorld")
    },
    {
        path:"/",
        redirect :"/login"
        
    }
]

const router = new VueRouter({
    routes : routes
})


export default router;