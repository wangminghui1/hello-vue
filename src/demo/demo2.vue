<template>
    <div>
        <button v-on:click="sendMsgToParent">子组件向父组件传递信息</button>
    </div>
</template>

<script>
 /* eslint-disable */
export default {
    data(){
        return {}
    },
    name : "wmhButton",
    methods : {
        sendMsgToParent : function(data){
            // console.log(data,data.target.value);
            // 1.在函数中使用emit方法向父组件弹射
            this.$emit("listenToChildrenEvent","传递给父组件一个消息");
        }
    }
}
</script>

<style>

</style>
