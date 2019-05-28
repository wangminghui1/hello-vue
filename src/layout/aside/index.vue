<template>
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :router = "msg"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      text-align="left"
      :collapse="isCollapse"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>财务管理</span>
        </template>
          <el-menu-item index="/index/dashboard">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/404">
        <i class="el-icon-document"></i>
        <span slot="title">日常办公</span>
      </el-menu-item>
      <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>考勤管理</span>
            </template>
          
          <el-menu-item index="/tables">
            <i class="el-icon-user-solid"></i>
            请假</el-menu-item>
          <el-menu-item index="1-4-1">
            <i class="el-icon-s-check"></i>
            外出</el-menu-item>
          <el-menu-item index="1-4-1">
            <i class="el-icon-shopping-bag-2"></i>
            加班</el-menu-item>
          <el-menu-item index="1-4-1">
            <i class="el-icon-date"></i>
            补考勤</el-menu-item>
        </el-submenu>
      <el-menu-item index="hello">
        <i class="el-icon-setting"></i>
        <span slot="title">商务管理</span>
      </el-menu-item>
       <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span slot="title">固定资产</span>
      </el-menu-item>
       <el-menu-item index="7">
        <i class="el-icon-setting"></i>
        <span slot="title">文件管理</span>
      </el-menu-item>
       
    </el-menu>
  
</template>

<script>
export default {
    name:"asideMeou",
    methods : {
        handleOpen:function(){

        },
        handleClose : function(){

        }
    },
    data(){
      return{
        msg : true,
        isCollapse : false
      }
    }
}
</script>
<style lang="scss">
    .el-menu-vertical-demo{
        // background-color:"#545c64";
            text-align: left;
    }
    .el-menu{
        border-right: 0;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

