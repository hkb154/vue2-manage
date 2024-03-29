<template>
  <div class="header-box">
    <div class="avatar-box">
      <!-- <el-avatar :size="80" fit="fill" src="../../assets/imgs/avatar2.png"></el-avatar> -->
      <img src="../../assets/imgs/avatar2.png" alt="您的头像">
    </div>
    <div class="cont">
      <div class="top">
        <div class="fl">
          <h2>小焦</h2>
          <h3>不知名退堂鼓选手</h3>
        </div>
        <div class="fr">
          <el-button type="primary" plain>编辑</el-button>
        </div>
      </div>
      <hr>
      <div class="bottom">
        <span>3粉丝</span>
        <span>12关注</span>
        <span>8收藏</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBox',
  
}
</script>

<style lang="less" scoped>
.header-box{
  height: 100px;
  background-color: #fff;
  display: flex;
  .avatar-box{
    padding: 10px 20px;
    cursor: pointer;
    img{
      width: 80px;
      border-radius: 50%;
    }
  }
  .cont{
    flex: 1;
    .top{
      height: 50px;
      top: 4px;
      position: relative;
      .fl{
        left: 10px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        h2{
          font-size: 20px;
          font-weight: bold;
        }
        h3{
          margin-top: 5px;
          font-size: 12px;
          color: #aaa;
        }
      }
      .fr{
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
      }
    }
    .bottom{
      span{
        padding-left: 10px;
        letter-spacing: 1px;
        font-size: 15px;
      }
    }
  }
}
</style>