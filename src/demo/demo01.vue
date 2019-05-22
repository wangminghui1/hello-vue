<template>
    <div>
        <p>{{message}}</p>
        <!-- 事件绑定使用v-on: -->
        <button v-on:click="wmh">点击事件</button>
        <p v-if="seen">{{message}}</p>

        <!--使用v-for列表渲染,给指定key值,当数据发生变化后,只重新渲染更新的值-->
        <ol>
            <li v-for="todo in todos" :key="todo.text">
            {{ todo.text }}
            </li>
        </ol>
        <div>
            <input v-model="message">
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    // 父组件向子组件传递信息 props
    props :['pp','qq'],
    name : "demo",
    data(){
       return{
           message : "这是我的第一个单文件组件demo",
           seen : true,
           todos : [
               { text: '学习 JavaScript' },
                { text: '学习 Vue' },
                { text: '整个牛项目' }
           ]
       } 
    },
    methods :{
        wmh(){
            console.log(this.message,this.pp,this.qq);
            // 我们更新了状态,但是我们没有操作dom,所有的dom都是由vue自身管理的
            this.seen = !this.seen;
            // alert(undefined === null);
        }
    }
}
</script>

<style>

</style>
