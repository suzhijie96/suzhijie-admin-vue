<template>
  <a-form :model="formState" ref="ruleForm" class="form">
    <a-form-item :wrapperCol="{ span: 24 }">
      <a-input
        v-model:value="formState.user"
        placeholder="Username"
        class="inputTmp"
      >
        <template #prefix>
          <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item :wrapperCol="{ span: 24 }">
      <a-input
        v-model:value="formState.password"
        type="password"
        placeholder="Password"
      >
        <template #prefix>
          <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item :wrapperCol="{ span: 24 }">
      <a-button style="width: 100%" type="primary" html-type="submit">
        登录
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { defineComponent, reactive, UnwrapRef } from "vue";
import "./login.less";
interface FormState {
  user: string;
  password: string;
}
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      user: "",
      password: "",
    });
    const handleFinish = (values: FormState) => {
      console.log(values, formState);
    };
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors);
    };
    return {
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
  },
});
</script>
<style lang="less">
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