<template>
    <div class="home">
      <el-container>
        <el-header>
          <span>电商管理系统</span>
            <el-button type="info" @click="del">退出</el-button>
        </el-header>
        <el-container>
    <el-aside width="200px">
    <el-col :span="12">
      <h5>|||</h5>
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#333744"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu :index="item.id" v-for="(item) in menus"  :key="item.icon">
          <template slot="title">
            <i :class="item.icon"></i>
            <span class="name">{{item.authName}}</span>
          </template>
          <el-menu-item :index="ite.id" v-for="(ite,index) in item.children" :key="index">
            <i :class="ite.icon"></i>
            <span>{{ite.authName}}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-aside>
          <el-main>
            Welcome
          </el-main>
        </el-container>
    </el-container>
    </div>
</template>

<script>
import { user } from '../components/http/home/user'
export default {
    props: {

    },
    data() {
        return {
          menus:[
            {authName:"用户管理",id:"1", icon:' el-icon-s-custom' ,children:[
              {authName:"用户列表",id:"1-1", icon:'el-icon-menu'}
            ]},
            {authName:"权限管理",id:"2", icon:'iconfont icon-shangpingouwudai2' ,children:[
              {authName:"角色列表", id:"2-1",icon:'el-icon-menu'},
              {authName:"权限列表",id:"2-2", icon:'el-icon-menu'},
            ]},
            {authName:"商品管理",id:"3", icon:'iconfont icon-danju' ,children:[
              {authName:"商品列表",id:"3-1", icon:'el-icon-menu'},
              {authName:"分类参数",id:"3-2", icon:'el-icon-menu'},
              {authName:"商品分类",id:"3-3", icon:'el-icon-menu'},
            ]},
            {authName:"订单管理",id:"4" ,icon:'iconfont icon-tianchongxing-' ,children:[
              {authName:"订单统计",id:"4-1", icon:'el-icon-menu'}
            ]},
            {authName:"数据统计",id:"5", icon:'iconfont icon-SHUJU' ,children:[
              {authName:"数据报表",id:"5-1", icon:'el-icon-menu'}
            ]},
          ]
        };
    },
    methods: {
      del(){
          sessionStorage.removeItem('token')
        window.location.reload()
      }
    },  
    components: {

    },
    mounted(){
      user().then(res =>{
        console.log(res)
      })
    }
};
</script>

<style  lang="less">
.home{
  height: 100%;
  .el-container{
    height: 100%;
      .el-header{
        display: flex;
        justify-content: space-between;
        background-color: #373d41;
        align-items: center;
        color: white;
      }
    .el-container{
      .el-aside{
        background-color: #333744;
        .el-col{
          width: 100%;
          h5{
            background-color: #4a5064;
            height: 25px;
            color: white;
            line-height: 25px;
            text-align: center;
          }
          .el-menu-vertical-demo{
            border: none;
          }

        .name{
          padding: 0 15px;
        }
        }
      }
      .el-main{
        background-color: #eaedf1;
      }
    }
  }
}
</style>
