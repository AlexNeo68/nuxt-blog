<template>
  <div v-if="post">
    <el-breadcrumb separator="/" class="mb">
      <el-breadcrumb-item :to="{ path: '/admin/posts' }"
        >Posts</el-breadcrumb-item
      >
      <el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      ref="form"
      :rules="rules"
      @submit.native.prevent="onSubmit"
      :model="form"
      style="width: 600px"
    >
      <h2>Обновить пост</h2>
      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input
          v-model="form.text"
          :type="`textarea`"
          :rows="10"
          resize="false"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" round native-type="submit"
          >Обновить</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  layout: "admin",
  async asyncData({ store, params }) {
    const post = await store.dispatch("posts/fetchAdminById", params.id);
    return { post };
  },
  mounted() {
    this.form.text = this.post.body;
  },
  head() {
    return {
      title: `Редактировать пост: ${this.post.title} | ${process.env.appName}`,
    };
  },
  data() {
    return {
      loading: false,
      form: {
        text: "",
      },
      rules: {
        text: [
          {
            required: true,
            message: "Необходимо указать текст",
            trigger: "blur",
          },
          {
            min: 3,
            max: 255,
            message: "Длина текста должна быть от 3 до 255 символов",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;

          const formData = {
            text: this.form.text,
            post_id: this.post.id,
          };
          try {
            await this.$store.dispatch("posts/update", formData);
          } catch (e) {
            console.log(e);
          } finally {
            this.loading = false;
          }
        }
      });
    },
  },
};
</script>
