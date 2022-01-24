<template>
  <el-form
    ref="form"
    :rules="rules"
    @submit.native.prevent="onSubmit"
    :model="form"
  >
    <h2>Оставить комментарий</h2>
    <el-form-item label="Ваше имя" prop="author">
      <el-input v-model="form.author"></el-input>
    </el-form-item>
    <el-form-item label="Текст комментария" prop="body">
      <el-input type="textarea" v-model="form.body"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="loading" round native-type="submit"
        >Оставить комментарий</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: {
    postId: {
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      form: {
        author: "",
        body: "",
      },
      rules: {
        author: [
          { required: true, message: "Укажите ваше имя", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "Длина имени должна быть от 3 до 15 символов",
            trigger: "blur",
          },
        ],
        body: [
          {
            required: true,
            message: "Необходимо указать комментарий",
            trigger: "blur",
          },
          {
            min: 3,
            max: 255,
            message: "Длина комментария должна быть от 3 до 255 символов",
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
            author: this.form.author,
            body: this.form.body,
            post_id: this.postId,
          };
          try {
            const comment = await this.$store.dispatch(
              "posts/addComment",
              formData
            );
            this.$message({
              showClose: true,
              type: "success",
              message: "Коментарий добавлен",
            });
            this.$emit("comment-created", comment);
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
