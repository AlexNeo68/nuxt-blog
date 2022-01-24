<template>
  <el-form
    ref="form"
    style="width: 50%"
    :rules="rules"
    @submit.native.prevent="onSubmit"
    :model="form"
  >
    <h2>Создать пользователя</h2>
    <el-form-item label="Логин" prop="email">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="Пароль" prop="password" class="mb2">
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="loading" round native-type="submit"
        >Создать пользователя</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  layout: "admin",
  data() {
    return {
      loading: false,
      form: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          { required: true, message: "Укажите логин", trigger: "blur" },
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
  head() {
    return {
      title: `Создать пользователя | ${process.env.appName}`,
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
            await this.$store.dispatch("auth/createUser", formData);
            this.$message.success("Пользователь успешно создан!");
            this.form = { email: "", passwors: "" };
          } catch (e) {
            console.log(e.response);
          } finally {
            this.loading = false;
          }
        }
      });
    },
  },
};
</script>
