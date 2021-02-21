<template>
    <div class="home">
      <el-container>
        <el-header>
          <span>电商管理系统</span>
            <el-button type="info">推出</el-button>
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
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
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
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {

    },  
    components: {

    },
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

        }
      }
      .el-main{
        background-color: #eaedf1;
      }
    }
  }
}
</style>
