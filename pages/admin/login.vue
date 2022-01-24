<template>
  <el-form
    ref="form"
    :rules="rules"
    @submit.native.prevent="onSubmit"
    :model="form"
  >
    <h2>Войти в панель администрирования</h2>
    <el-form-item label="Email" prop="email">
      <el-input v-model="form.email"></el-input>
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
        email: "",
        password: "",
      },
      rules: {
        email: [
          { required: true, message: "Укажите ваш email", trigger: "blur" },
          {
            min: 3,
            max: 64,
            message: "Длина логина должна быть от 3 до 64 символов",
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

      case "session":
        this.$message.warning("Нет авторизации");
        break;

      default:
        break;
    }
  },
  head() {
    return {
      title: `Авторизоваться | ${process.env.appName}`,
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;

          const formData = {
            email: this.form.email,
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
