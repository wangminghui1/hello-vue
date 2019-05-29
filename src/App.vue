<template>
  <div id="app">   
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      reqs:false
    }
  }
}
</script>

<style lang="scss">
  @import './style/index.scss'; // 全局自定义的css样式
</style>
