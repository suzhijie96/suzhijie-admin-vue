<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Login />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Login from "@/views/account/login.vue";

export default defineComponent({
  name: "Home",
  components: {
    Login,
  },
});
</script>
