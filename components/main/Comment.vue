<template>
  <el-card class="comment">
    <header class="comment-header" slot="header">
      <div class="comment-author">{{ comment.author }}</div>
      <small><i class="el-icon-date"></i> {{ comment.date | date }}</small>
    </header>
    <div class="comment-body">
      <vue-markdown>{{ comment.body }}</vue-markdown>
    </div>
  </el-card>
</template>
<script>
export default {
  props: {
    comment: {
      type: Object,
      requred: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.comment {
  margin-top: 1.5rem;
}
.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.comment-body {
  font-size: 0.9rem;
  line-height: 1.3;
}
</style>
