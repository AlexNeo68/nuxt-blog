<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="14" :lg="12">
      <app-post v-for="post in 3" :key="post"/>
    </el-col>
  </el-row>
</template>

<script>
import AppPost from '@/components/main/Post.vue'
export default {
  name: 'IndexPage',
  components: {AppPost},
  head: {
    title: 'Главная'
  }
}
</script>
