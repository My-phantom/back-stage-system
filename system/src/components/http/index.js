import axios from 'axios'
import touter  from '../../router'


export default function(config){
    const instance = axios.create({
        baseURL: '/api',
      });



    return instance(config)

}