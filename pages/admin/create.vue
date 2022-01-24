<template>
  <div>
    <el-breadcrumb separator="/" class="mb">
      <el-breadcrumb-item :to="{ path: '/admin/posts' }"
        >Posts</el-breadcrumb-item
      >
      <el-breadcrumb-item>Создать</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      ref="form"
      :rules="rules"
      @submit.native.prevent="onSubmit"
      :model="form"
      style="width: 600px"
    >
      <h2>Создать пост</h2>
      <el-form-item label="Заголовок поста" prop="text">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input
          v-model="form.text"
          :type="`textarea`"
          :rows="10"
          resize="false"
        ></el-input>
      </el-form-item>

      <el-upload
        class="mb"
        drag
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :auto-upload="false"
        :on-change="handlerImageChange"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          Перетащите изображение сюда <em>или кликните для загрузки</em>
        </div>
        <div class="el-upload__tip" slot="tip">
          Доступно для загрузки файлы с расширением jpg/png
        </div>
      </el-upload>

      <el-row type="flex" justify="space-between">
        <el-col
          ><el-button
            type="primary"
            :loading="loading"
            round
            native-type="submit"
            >Создать</el-button
          ></el-col
        >
        <el-col
          ><el-button round plain @click="previewVisible = true"
            >Предпросмотр</el-button
          ></el-col
        >
      </el-row>

      <el-dialog title="Предпросмотр" :visible.sync="previewVisible">
        <div :key="form.text">
          <vue-markdown>{{ form.text }}</vue-markdown>
        </div>
      </el-dialog>
    </el-form>
  </div>
</template>
<script>
export default {
  layout: "admin",
  head() {
    return {
      title: `Создать пост | ${process.env.appName}`,
    };
  },
  data() {
    return {
      loading: false,
      previewVisible: false,
      form: {
        title: "",
        text: "",
        image: null,
      },
      rules: {
        title: [
          {
            required: true,
            message: "Необходимо указать заголовок",
            trigger: "blur",
          },
          {
            min: 3,
            max: 64,
            message: "Длина заголовка должна быть от 3 до 64 символов",
            trigger: "blur",
          },
        ],
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
    handlerImageChange(file) {
      this.form.image = file.raw;
    },
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid && this.form.image) {
          this.loading = true;

          const formData = new FormData();
          formData.append("title", this.form.title);
          formData.append("body", this.form.text);
          formData.append("image", this.form.image);

          try {
            await this.$store.dispatch("posts/create", formData);
            this.form.title = "";
            this.form.text = "";
            this.form.image = null;
            this.$refs.upload.clearFiles();
            this.$message.success("Пост успешно создан!");
          } catch (e) {
            console.log(e);
          } finally {
            this.loading = false;
          }
        } else {
          this.$message.error("Форма заполнена не корректно!");
        }
      });
    },
  },
};
</script>
