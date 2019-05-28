import Cookies from 'js-cookie'

const TokenKey = "vue-hello-key"

export function getToken(){
    return Cookies.get(TokenKey);
}

export function setToken(data){
    Cookies.set(TokenKey,data,{
        expires : new Date(new Date().getTime() + 1000*60 *60)
    });
}

export function rmToken(){
    Cookies.remove(TokenKey);
}

