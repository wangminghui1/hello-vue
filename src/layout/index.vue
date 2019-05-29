<template>
<!-- ele布局容器 -->

<el-container>
  
  <el-aside width="200px">
      <aside-meou />
  </el-aside>
  <el-container>
    <el-header style="height: 60px;">
        <wmh-header/>
    </el-header>
    <el-scrollbar
     :native='reqs'
     style="height:100%"
     >
    <el-main>
      <app-main/>
    </el-main>
    </el-scrollbar>
    <!-- <el-footer></el-footer> -->
  </el-container>
</el-container>
</template>

<script>
/* eslint-disable */
import asideMeou from './aside/index'
import wmhHeader from './header/index'
import appMain from './appmain/index'
export default {
    components :{
        asideMeou,
        wmhHeader,
        appMain
    },
    data (){
      return{
        reqs : false
      }
    }
}
</script>

<style>
    .el-header, .el-footer {
    /* background-color: #B3C0D1; */
    color: #333;
    text-align: center;
    line-height: 50px;
    padding: 0;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  }
  
  .el-aside {
    background-color: #545c64;
    /* color: #333; */
    text-align: center;
    line-height: 200px;
    border-right: solid 1px #e6e6e6;
  }
  
  .el-main {
    background-color: #E9EEF3;
    /* background-color: #e9f0fa; */
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-container{
      height: 100%;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
