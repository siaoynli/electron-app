<script setup lang="ts">

</script>

<template>
  <div class="login_bg">
    <!--左边-->
    <div class="login_adv">
      <div class="login_adv__title">
        <h2>小鹿线</h2>
        <h4>客户关系管理系统</h4>
        <p>让业务在线更高效，加速企业数字化升级。</p>
      </div>
      <div class="login_adv__mask"></div>
      <div class="login_adv__imgage">
        <img src="../assets/images/data.png" width="100%">
      </div>
      <div class="login_adv__bottom">
        © 小鹿线客户管理系统 1.0.11
      </div>
    </div>
    <div class="login-main">
      <div class="login-form">

        <div class="login-header">
          <div class="login-img">
            <img src="../assets/images/logo.png" alt="">
            <label>小鹿线客户管理系统</label>
          </div>
        </div>
        <el-tabs>
          <el-tab-pane label="账号登录" lazy>User</el-tab-pane>
          <el-tab-pane label="手机号登录" lazy>Config</el-tab-pane>
        </el-tabs>
        <template v-if='true'>
          <el-divider>其他登录方式</el-divider>
          <div class="login-oauth">
            <!--微信按钮-->
            <el-button type="success" circle  size="large">
              <el-icon size="large">
                <ChatDotRound />
              </el-icon>
            </el-button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login_bg {
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
}

.login_adv {
  background-image: url('../assets/images/auth_banner.jpg');
  width: 40%;
  position: relative;
}

.login_adv__title {
  color: #fff;
  padding: 40px;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 2;
}

.login_adv__title h2 {
  font-size: 40px;
}

.login_adv__title h4 {
  font-size: 18px;
  margin-top: 10px;
  font-weight: normal;
}

.login_adv__title p {
  font-size: 14px;
  margin-top: 10px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.6);
}

.login_adv__title div {
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.login_adv__imgage {
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 80px;
  padding: 40px;
  z-index: 3;
}

.login_adv__imgage img {
  width: 100%;
}

.login_adv__bottom {
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  color: #fff;
  padding: 0 40px 40px 40px;
  background-image: linear-gradient(transparent, #000);
  z-index: 3;
}

.login_adv__mask {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.login-main{
  flex:1;
  display: flex;
  overflow: auto;
}
.login-form{
  width:400px;
  margin: auto;
  padding:80px 0 0 0;
}
.login-header{
  margin-bottom: 40px;
}
.login-header .login-img{
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-header .login-img img{
  width:40px;
  height: 40px;
  vertical-align: bottom;
  margin-right:10px;
}
.login-header .login-img label{
  font-size:26px;
  font-weight: bold;
}
.login-oauth{
  display: flex;
  justify-content: space-around;
}
</style>
