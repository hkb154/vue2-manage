<template>
  <div>
    <el-upload
      class="upload-demo"
      ref="upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-change="handleChange"
      :file-list="fileList"
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">确定</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
import {BpmnInfoApi} from '../../request/api'
export default {
  name: 'Definition',
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    handleChange(file, fileList){
      this.fileList = fileList
    },
    async submitUpload() {
      const file = this.fileList[0];
      const BpmnInfoApiRes = await BpmnInfoApi({
        file: file.raw,
        bpmnLabel: file.name,
        bpmnType: 'casual-leave',
        info: '上传文件接口'
      }, {
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      })
      if(!BpmnInfoApiRes) return;
      this.$message.success({
        message: BpmnInfoApiRes.msg,
        showClose: true,
        center: true
      })
    },
    handleRemove(file, fileList) {
      // 点击删除按钮时执行
      console.log(file, fileList);
    },
    handlePreview(file) {
      // 点击文件时执行
      console.log(file);
    }
  }
}
</script>

<style lang="less" scoped>

</style>