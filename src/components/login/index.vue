<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" label-position="left" class="login-form">
      <div class="title-container">
        <h3 class="title">登录表单</h3>
      </div>
      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="登录名"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
          clearable
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
          show-password
        />
        <span class="show-pwd" @click="showPwd">
          <!-- <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" /> -->
        </span>
      </el-form-item>
      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;background-color: darkslategray;"
        @keyup.enter="handleLogin"
        @click.native.prevent="handleLogin"
      >登录</el-button>
      <div class="tips" style="display: none">
        <span style="margin-right:20px;">username: admin</span>
        <span>password: any</span>
      </div>
    </el-form>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "111111"
      },
      //   loginRules: {
      //     username: [{ required: true, trigger: 'blur', validator: validateUsername }],
      //     password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      //   },
      loading: false,
      passwordType: "",
      redirect: undefined
    };
  },
  methods: {
    showPwd: function() {},
    handleLogin: function() {
      console.log(this.$router);
      this.$router.push({
        name: "home",
        params: {
          user: this.loginForm
        }
      });
    }
  },
  watch: {},
  computed: {}
};
</script>
<style lang="scss" scoped>
    $bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
      width: 100%;
    /* height: 100%; */
    min-height: 100%;
    background-color: darkslategray;
    overflow: hidden;

  .login-form {
    position: relative;
    margin: 0 auto;
    width: 480px;
    max-width: 100%;
    padding: 160px 32px;
    .title{
      text-align: center;
      font-size: 24px;
      font-family: serif;
    }
  }

  
}
</style>
