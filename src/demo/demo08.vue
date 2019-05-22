<template>
  <div id="demo8">
      <!-- 原生dom事件,使用$event传入 -->
    <button v-on:click="warn('Form cannot be submitted yet.', $event)">Submit</button><br/><br/>
    <br/>
    <!-- 阻止单击事件继续传播 -->
    <a @click.stop="doThis">阻止单击事件继续传播</a><br/>
    <a v-on:click.stop="doThis">222</a><br/>

    <a v-on:click.once="doThis">触发一次</a><br/>
    <!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit">
</form>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    data(){
        return{
            
        }
    },
    methods :{
        warn : function(msg,event){
            console.log(msg,"按钮叫"+event.target.innerText);
            event.target.innerText = "提交";
            let {target} = event;
        },
        doThis : function(){
            alert("呵呵");
        }
    }
};
</script>

<style>
</style>
