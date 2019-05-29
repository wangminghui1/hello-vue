<template>
    <div>
        <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">
           <div> <i class="el-icon-delete"></i>
           <!-- 图标 名称 -->
            <div class="sess"><span style="font-size: 12px;">考勤人数</span></div>
           </div>   
           <div><!-- 内容-->
           <!-- <svg-icon icon-class="人力中心" class-name="card-panel-icon" /> -->
           12459</div>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">3</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">4</div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name : "dataBoard",
    data(){
        return{

        }
    },
    methods : {

    },
    computed : {

    },
    created : function(){
        
    }
}
</script>

<style>
    .grid-content{
        background-color: white;
        height: 200px;
    }
    .el-icon-delete{
        background-color: #27c392;
        padding: 20px;
        border-radius: 50%;
        margin-bottom: 10px;
        position: relative;
        top: -25px;
    }
    .sess{
        position: relative;
        top: -140px;
    /* height: 30px; */
    }
</style>
