<template>  
<div>
  <div class="left-menu">
  <button>切换</button>
  </div>
  <div>
    <!-- <el-input  type="search">

    </el-input> -->
  </div>
  <div class='right-menu'>
    <el-dropdown @command="haldCommond">
      <div class="icon-home">
          <img src="../../assets/home.png" class="user-avatar">
          <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="q">首页</el-dropdown-item>
        <el-dropdown-item command="s">个人信息</el-dropdown-item>
        <el-dropdown-item command="登录页面">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</div>
</template>

<script>

/* eslint-disable */
import {rmToken} from '../../utils/auth'

export default {
  name: "wmh-header",
  methods:{
      haldCommond : function(ev){
          // this.$message(JSON.stringify(this.$router.options.routes));
          if(ev.indexOf("登录页面") != -1){
            rmToken();
            this.$router.push({name:"login"});
          } else if(ev.indexOf("q") != -1){
            this.$router.push({name:"home"});
          }else{
            console.log(1);
          }
      }
  },
  data(){
    return{
      isCollapse : true
    }
  }
};
</script>

<style scoped>
.right-menu {
  float: right;
  height: 100%;
  color: red;
  /* line-height: 50px; */
  width: 70px;
  right: 0;
}
.left-menu{
  float: left;
}
.el-dropdown{
    margin-top: 5px;
}

.user-avatar{
    height: 40px;
    width: 40px;
}
.el-icon-arrow-down,.icon-home{
  cursor: pointer;
}
</style>
