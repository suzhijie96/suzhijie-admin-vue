<template>
  <div class="account">
    <div class="wrap">
      <div class="top">
        <img src="../../assets/img/logo-full.png" alt="" class="logo" />
        <span class="title">大树科技｜风控系统</span>
      </div>
      <div class="top">
        <a-form :model="formState">
          <a-form-item>
            <a-input v-model:value="formState.user" placeholder="Username">
              <template #prefix>
                <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-model:value="formState.password"
              type="password"
              placeholder="Password"
            >
              <template #prefix
                ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
              /></template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              :disabled="formState.user === '' || formState.password === ''"
            >
              Log in
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { defineComponent, reactive, UnwrapRef } from "vue";
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

<style>
.account {
  width: 780px;
  background-image: url("~@/assets/img/login-full.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 50%;
  margin: 0 auto;
}
.wrap {
  margin-left: 50%;
  padding: 32px 0 24px;
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
.account .form{
  display: block;
  width: 368px;
}
</style>
