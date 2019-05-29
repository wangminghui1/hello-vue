<template>
  <div>
    <el-table 
    :data="tableDataPage" 
    border 
    style="width: 100%" 
    :highlight-current-row="msg"
    @row-dblclick="cellClick"
    >
      <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="province" label="省份" width="120"></el-table-column>
      <el-table-column prop="city" label="市区" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" width="300"></el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 15, 20, 50]"
        :page-size="1"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableDataVar.length"
      ></el-pagination>
    </div>
    <el-dialog
        custom-class = "dilo"
        title="表单"
        :modal-append-to-body = "modd"
        :visible.sync="dialogVisible"
        width="72%"
        margin-top= '10vh'
        :before-close="handleClose"
        :lock-scroll = "lockScroll"
        center>
        <form-blg />
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable */
import formBlg from '../../components/forms/askleave/index.vue'
export default {
    components : {
        formBlg
    },
    computed : {
        tableDataPage : function(){
            return this.tableData.splice((this.currentPage -1) * this.pageSize,this.currentPage * this.pageSize)
        }
    },
    created : function(){
        this.tableDataVar = this.tableData;
        console.log(this.tableDataVar.length);
    },
  methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    handleClick(row) {
      console.log(row);
      this.dialogVisible = true;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    cellClick : function(row, column, event){
        // console.log(row,column,event);
        this.edit(row);
    },
    edit : function(row){
        console.log(row);
    }
  },

  data() {
    return {
      modd : false,
      moddd : false,
      lockScroll : true,
        dialogVisible : false,
        msg : true,
      currentPage : 1,
      pageSize : 9,   //默认每页数额
      tableDataVar : [],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ]
    };
  }
};
</script>
<style lang="scss">
  
  
  .dilo{
    .el-dialog__header{
      background-color: black;
      height: 32px;
    // font: 
    .el-dialog__title{
      position: absolute;
      top: 7px;
      left: 25px;
      font-size: 16px;
      color: #ffffff;
    }
    .el-dialog__headerbtn{
      position: absolute;
      top: 5px;
      right: 5px
      }
    }
  }
</style>
