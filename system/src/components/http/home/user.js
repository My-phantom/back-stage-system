import http from '../index'

export function user(){
    return http({
        url:'/users?pagenum=1&pagesize=5',
        method:"get",
    
    })
}