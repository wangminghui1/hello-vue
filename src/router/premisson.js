import router from './index'
import { getToken } from "../utils/auth"

/**设置路由护卫 */


router.beforeEach((to,from,next) => {
    let token = getToken();

    // eslint-disable-next-line no-console
    console.log("去哪里" + to.name +"来自哪里" + from.name +" token :"+typeof(token));
    /**会发生dead loop 原因:此时地址等于转向地址 */
    // if (token) {
    //     next();
    // } 
    // // else {
    //      // eslint-disable-next-line no-console
    //     // console.log("**************************跳转结束*****************************");
    // //     next("/login");
    // next({path:"/login"});
    // // router.push({name:"login"})
    // // }
    // 解决方案 :条件排除 此时路由等于指向路由的情况
    if(token){
            next();
    }else{
        if(to.path == '/login'){
            next();
        }else{
            next("/login");
        }
    }
})
