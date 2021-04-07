<template>
  <a-layout style="height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <silder-menu />
      <!-- <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu> -->
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <Header style="display: inline-block" />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "./Header.vue";
import SilderMenu from "./SilderMenu.vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: "BasicLayout",
  components: {
    Header,
    SilderMenu,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    return {
      selectedKeys: ref<string[]>(["1"]),
      collapsed: ref<boolean>(false),
    };
  },
});
</script>

<style lang="less">
#basicLayout {
  height: 100vh;
}
</style>
