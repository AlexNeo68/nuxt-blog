<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="14" :lg="12">
      <article class="post">
        <header class="post-header">
          <div class="post-title">
            <h1>{{ post.title }}</h1>
            <nuxt-link to="/"><i class="el-icon-back"></i></nuxt-link>
          </div>
          <div class="post-info">
            <small><i class="el-icon-date"></i>{{ post.date | date }}</small>
            <small><i class="el-icon-view"></i> {{ post.views }} </small>
          </div>
          <div class="post-body">
            <img :src="post.image" alt="post-image" class="post-image" />
          </div>
        </header>
        <main class="post-content">
          <vue-markdown>{{ post.body }}</vue-markdown>
        </main>
        <footer>
          <AppCommentForm
            v-if="availableAddComment"
            :postId="post.id"
            @comment-created="createCommentHandler"
            class="comment-form"
          />

          <div class="comments" v-if="post.comments.length">
            <AppComment
              v-for="comment in post.comments"
              :comment="comment"
              :key="comment.id"
            />
          </div>
          <div v-else>
            <p class="no-comments">Комментариев нет</p>
          </div>
        </footer>
      </article>
    </el-col>
  </el-row>
</template>
<script>
import AppComment from "@/components/main/Comment.vue";
import AppCommentForm from "@/components/main/CommentForm.vue";
export default {
  components: { AppComment, AppCommentForm },
  async asyncData({ store, error, params }) {
    try {
      const post = await store.dispatch("posts/fetchById", params.id);
      return { post };
    } catch (e) {
      error(e);
    }
  },
  data() {
    return {
      availableAddComment: true,
    };
  },
  methods: {
    createCommentHandler(comment) {
      this.availableAddComment = false;
      this.post.comments.push(comment);
    },
  },
  validate({ params }) {
    return !!params.id;
  },
  head() {
    return {
      title: `${this.post.title} | ${process.env.appName}`,
    };
  },
};
</script>
<style lang="scss" scoped>
.post-header {
  margin-bottom: 1rem;
}
.post-title,
.post-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.post-image {
  width: 100%;
  height: auto;
}
.post-content p + p {
  margin-top: 1rem;
}
.comment-form {
  margin-top: 2rem;
}
.no-comments {
  text-align: center;
  padding: 1.2rem;
}
</style>
