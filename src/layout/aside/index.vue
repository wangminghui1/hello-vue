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
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>财务管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="/home">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">日常办公</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">考勤管理</span>
      </el-menu-item>
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
        msg : true
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
</style>

