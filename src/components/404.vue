<template>
  <div>
    <div class="navbar" v-on:click="getRoutea">
      <p style="font-size: 200%;text-align: center;">The Vue Demo</p>
    </div>
    <div class="main">
      <p style="font-size: 800%;text-align: center;margin-bottom: 0;">404</p>
        <p style="text-align: center;">sry,can't find page</p>
    </div>
    <p style="width:100%;height:123%"></p>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  computed : {
    cc : function(){
    return JSON.stringify(this.$root);
    }
  },
  methods : {
    getRoutea : function(){
      console.log(location.hash)
    }
  }
};
</script>

<style scoped>
.navbar,
.main {
  width: 100%;
}
.navbar{
        line-height: 3;
}
</style>
