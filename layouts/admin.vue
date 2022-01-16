<template>
  <div class="admin-layout">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <AppAside />
      </el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AppAside from "@/components/admin/Aside.vue";
export default {
  components: { AppAside },
  middleware: ["auth-admin"],
};
</script>

<style lang="scss" scoped>
.admin-layout {
  width: 100%;
  height: 100vh;
}
</style>
