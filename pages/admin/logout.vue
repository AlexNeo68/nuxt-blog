<template>
  <h1>Происходит выход из системы</h1>
</template>
<script>
export default {
  layout: "admin",
  beforeCreate() {
    this.$store.dispatch("auth/logout");
    this.$router.push("/admin/login?message=logout");
  },
};
</script>
