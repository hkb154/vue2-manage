<template>
  <div class="cus-box">
    <el-button @click="exportExl">导出</el-button>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="客户姓名"
        align="center"
      >
        <template slot-scope="{row}">{{ (row.name) ? row.name : '不愿透露姓名' }}</template>
      </el-table-column>
      <el-table-column
        label="电话"
        align="center"  
      >
        <template slot-scope="{row}">{{ (!row.phone) ? '保密' : row.phone }}</template>
      </el-table-column>
      <el-table-column
        label="性别"
        align="center"  
      >
        <template slot-scope="{row}">{{ row.sex == 0 ? '男' : (row.sex == 1 ? '女' : '保密') }}</template>
      </el-table-column>
      <el-table-column
        label="录入人"
        align="center"  
      >
        <template slot-scope="{row}">{{ (!row.inputUserName) ? '未知' : row.inputUserName }}</template>
      </el-table-column>
      <el-table-column
        label="录入时间"
        align="center"  
      >
        <template slot-scope="{row}">{{ new Date(row.entryTime).toLocaleDateString().replaceAll('/', '-') }}</template>
      </el-table-column>
      <el-table-column
        label="修改"
        align="center"  
      >
        <template>
          <i class="el-icon-edit"></i>修改
        </template>
      </el-table-column>
    </el-table>
    <div class="page-box">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {saveAs} from 'file-saver'
import {GetCustomerListAPI, CustomerExportAPI} from '../../request/api'

export default {
  name: 'Customer',
  data() {
    return {
      tableData: [],
      pageNum: 1, // 当前页数
      pageSize: 10, // 每页条数
      total: null
    }
  },

  mounted(){
    this.getTableData();
  },

  methods: {
    async getTableData(){
      const GetCustomerListAPIRes = await GetCustomerListAPI({
        pageNum: this.pageNum,
        pageSize: this.pageSize
      })
      if(!GetCustomerListAPIRes) return;
      console.log(GetCustomerListAPIRes);
      this.tableData = GetCustomerListAPIRes.rows;
      this.total = GetCustomerListAPIRes.total;
    },

    handleSizeChange(val){
      this.pageSize = val;
      this.pageNum = 1;
      this.getTableData();
    },

    handleCurrentChange(val){
      // 当前页改变时执行
      this.pageNum = val;
      this.getTableData();
    },

    async exportExl(){
      const CustomerExportAPIRes = await CustomerExportAPI(
        {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }, 
        {
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          responseType: 'blob'
        }
      );
      if(!CustomerExportAPIRes) return;
      // 处理成表格文件后调用保存文件方法，浏览器会自动下载
      saveAs(
        new Blob([CustomerExportAPIRes]),
        // 设置导出文件名称
        `客户档案_${new Date().getTime()}.xlsx`
      );
    }
  }
}
</script>

<style lang="less" scoped>
.cus-box{
  width: calc(100vw - 220px);
  height: calc(100vh - 156px);
  overflow-y: auto;

  .el-table::before{
    height: 0;
  }

  .page-box{
    display: flex;
    width: calc(100vw - 220px);
    background-color: #fff;
    position: fixed;
    padding: 10px 0;
    bottom: 0;
    justify-content: center;
  }
}

</style>