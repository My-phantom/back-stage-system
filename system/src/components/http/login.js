import http from './index.js'
export function login(user,pwd){
    return http({
        url:'/login',
        method:'post',
        data:{
            username:user,
            password:pwd
        }
    })
}