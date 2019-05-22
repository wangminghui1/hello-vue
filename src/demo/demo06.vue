<template>
  <div id="demo6">
    <!-- v-if -->
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>
    <div v-show="awesome">
        V-SHOW 会保留元素,只是做了样式上的隐藏
        <button @click="change">切换</button>
    </div>
    <button v-show="!awesome" @click="change">切换</button>
  </div>
</template>

<script>
export default {
  name: "demo6",
  data() {
    return {
      awesome: true,
        type:""
    };
  },
  methods :{
      change:function(){
          this.awesome = !this.awesome;
      }
  }
};
</script>


<style>

</style>