<template>
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
</template>

<script>
export default {
  name: "wmh-header",
  methods:{
      haldCommond : function(ev){
          this.$message(JSON.stringify(this.$router.options.routes));
          if(ev.indexOf("登录页面") > 0){
            this.$router.push({name:"login"});
          }
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
