<template>
  <el-form
    ref="form"
    :rules="rules"
    @submit.native.prevent="onSubmit"
    :model="form"
  >
    <h2>Войти в панель администрирования</h2>
    <el-form-item label="Логин" prop="login">
      <el-input v-model="form.login"></el-input>
    </el-form-item>
    <el-form-item label="Пароль" prop="password" class="mb2">
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="loading" round native-type="submit"
        >Войти</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  layout: "empty",
  data() {
    return {
      loading: false,
      form: {
        login: "",
        password: "",
      },
      rules: {
        login: [
          { required: true, message: "Укажите ваш логин", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "Длина логина должна быть от 3 до 15 символов",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Необходимо указать пароль",
            trigger: "blur",
          },
          {
            min: 6,
            max: 64,
            message: "Длина пароля должна быть от 3 до 255 символов",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    const { message } = this.$route.query;

    switch (message) {
      case "login":
        this.$message.info("Необходима авторизация");
        break;
      case "logout":
        this.$message.success("Вы вышли из системы");
        break;

      default:
        break;
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;

          const formData = {
            login: this.form.login,
            password: this.form.password,
          };
          try {
            await this.$store.dispatch("auth/login", formData);
            this.$router.push("/admin");
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
