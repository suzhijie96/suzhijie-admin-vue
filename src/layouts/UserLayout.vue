<template>
  <div id="userLayout">
    <div class="account">
      <div class="wrap">
        <div class="top">
          <img src="~@/assets/img/logo-full.png" alt="" class="logo" />
          <span class="title">大树科技</span>
          <span class="title-line"></span>
          <span class="title">风控系统</span>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "UserLayout",
  components: {},
});
</script>

<style lang="less">
#userLayout {
  background-color: #f5f7fa;
}
.account {
  width: 780px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  background-image: url("~@/assets/img/login-full.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 50%;
  margin: 0 auto;
}
.wrap {
  margin-left: 50%;
  padding: 32px 0 24px;
  width: 50%;
}
.logo {
  height: 45px;
  margin-right: 5px;
}
.title {
  font-size: 30px;
  color: rgba(0, 0, 0, 0.85);
  font-family: Myriad Pro, Helvetica Neue, Arial, Helvetica, sans-serif;
  font-weight: 450;
  position: relative;
  vertical-align: middle;
}
.title-line {
  font-size: 22px;
  border-right: solid #000 1px;
  padding-bottom: 5px;
  margin: 0 10px;
}
.account .form {
  margin-top: 20px;
  display: block;
  width: 368px;
}
.account .form .inputTmp {
  width: 100%;
}
</style>
