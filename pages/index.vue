<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="14" :lg="12">
      <AppPost v-for="post in posts" :key="post.id" :post="post" />
    </el-col>
  </el-row>
</template>

<script>
import AppPost from "@/components/main/Post.vue";
export default {
  name: "IndexPage",
  components: { AppPost },
  async asyncData({ store }) {
    try {
      const posts = await store.dispatch("posts/fetch");
      return { posts };
    } catch (e) {
      console.log(e);
    }
  },
  head: {
    title: `Главная | ${process.env.appName}`,
  },
};
</script>
