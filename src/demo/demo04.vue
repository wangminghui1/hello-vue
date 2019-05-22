<template>
    <div>
        <h2>计算属性:字符串反转</h2>
        <p>{{message}}</p>
        <p>{{resolveMessage}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            message:"你是俺单身发什么疯拉丝粉"
        }
    },
    computed:{
        resolveMessage : function(){
            return this.message.split("").reverse().join();
        }
    },
    name : 'demo4'
}
</script>

<style>

</style>
