<template>
    <div>
        <h3>关于vue的渲染问题</h3>
        <p>{{message}}</p>
        <p>{{age}}</p>
        <button @[name]="sub">点击增加新属性</button>
        <!-- v-bind:[attr] ==> :[attr] 
            v-on:[event] ==>  @[event]
        -->
    </div>
</template>


<script>
/* eslint-disable */
export default {
    name : "demo3",
    data(){
        return {
            message : "如何响应 ",
            age : null,
            name : null
        }
    },

    methods : {
        sub : function(){
            let cc= 1;
            //  console.log(this);
            // Object.freeze(this);    //2.使用该方法不会重新渲染
            this.age = "10";    //1.给实例增加新值,不会发生变化,暂时用不到的值,可以先初始化
            this.message = "响应了" //修改已存在的值会渲染
        }
    },
    // 钩子函数
    beforeCreate : function(){
        console.log("beforeCreate实例初始化之后,数据监测事件配置之前");
    },
    created : function(){
        console.log("这一步实例创建被调用,事件回调,数据观测已完毕,只是还没有被挂载到dom元素上,没有$el属性");
        console.log("this.$el" + this.$el);
    },
    beforeMount : function(){
        console.log("在挂载开始之前被调用：相关的 render 函数首次被调用");
    },
    mounted : function(){
        console.log("实例被挂载后调用,$el"+this.$el );
        this.name = "click";
    },
    beforeUpdate : function(){
        console.log("数据更新前调用");
    },
    updated: function(){
        console.log("数据更新后调用");
    },
    beforeDestroy: function(){
        console.log("销毁前调用");
    },
    destroyed : function(){
        console.log("销毁后调用");
    }


    
}
</script>

<style>

</style>
