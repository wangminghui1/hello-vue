<template>
<div>
  <div id="watch-example" class="static" :class="object">
      动态绑定class
      <button @click="change">改变</button>
  </div>
  <!-- 内联样式 : 也可以直接绑定一个对象 -->
  <!-- 支持多个值 <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div> --> 
  <div :class="[abj,bbj]" :style="{color : firstColor,fontSize:fontSize +'px'}">
      数组的形式绑定class
  </div>
  </div>
</template>

<script>
/* eslint-disable */
// class和style动态绑定
export default {
  data() {
    return {
      question: "",
      firstColor : "black",
      fontSize : 25,
      answer: "I cannot give you an answer until you ask a question!",
      object : {
          active : true,
          isRead : false
      },
      abj : "act",
      bbj :'bct'
    };
  },
  name: "demo5",
  methods : {
      change:function(){
          this.object.active = !this.object.active;
          this.object.isRead = !this.object.isRead;
      }
  }
};
</script>

<style>
.static{
    margin: auto;
}
.active{
    color:red;
}
.isRead{
    color: lime;
}
</style>
