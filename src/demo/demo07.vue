<template>
    <div id='demo7'>
        <h2>{{title}}</h2>
        <!-- v-for 渲染数组列表选项 -->
        <ol >
            <!--使用方法过滤数组 item in event(items)-->
            <li v-for="item in items" :key="item.key">{{item.name}}</li>  
            <!-- 对象 使用 of -->
            <!-- <li v-for="item of obj" :key="item.key">{{item}}</li> -->
        </ol>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data(){
        return {
            items :[
                {name :"老打",key :"24aed23"},
                {name :"挨打",key :"344fdc2"},
                {name :"爱打",key :"ad34fcb"},
                {name :"艾达",key :"a34c5fb"}
            ],
            title : "v-for 数组列表渲染",
            obj :{
                name : "郑思",
                age : 18,
                address : "上海",
                tel:"13445678907"
            }
        }
    },
    computed :{
        // 过滤火排序后显示,可以使用计算属性
        mathItems : function(){
            this.items.filter(function(item){
                console.log(item.name.substring(0,1))
                return {key:item.key,name : item.name.substring(0,1)}
            })
        }
    }
    // 或者使用自定义方法
    ,
    methods :{
        event : function(){

        }
    }
}   
</script>

<style>

</style>
