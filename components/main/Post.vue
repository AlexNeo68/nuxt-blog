<template>
  <el-card class="post" body-style="padding:0" shadow="hover">
    <header class="post-header" slot="header">
      <h3>{{ post.title }}</h3>
      <small>
        <i class="el-icon-date"></i>
        {{ post.date | date("date") }}</small
      >
    </header>
    <div class="post-body">
      <img :src="post.image" alt="post-image" class="post-image" />
    </div>

    <div class="post-footer">
      <el-button @click="goToPost" type="primary" round>Открыть</el-button>
      <span>
        <i class="el-icon-chat-dot-square"></i>
        {{ post.comments }}
      </span>
    </div>
  </el-card>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToPost() {
      this.$router.push({ path: `/posts/${this.post.id}` });
    },
  },
};
</script>
<style lang="scss" scoped>
.post {
  margin-bottom: 2rem;
}
.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post-image {
  width: 100%;
  height: auto;
}
.post-footer {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
