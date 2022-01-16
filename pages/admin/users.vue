<template>
  <el-form
    ref="form"
    style="width: 50%"
    :rules="rules"
    @submit.native.prevent="onSubmit"
    :model="form"
  >
    <h2>Создать пользователя</h2>
    <el-form-item label="Логин" prop="login">
      <el-input v-model="form.login"></el-input>
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
        login: "",
        password: "",
      },
      rules: {
        login: [
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
            await this.$store.dispatch("auth/createUser", formData);
            this.$message.success("Пользователь успешно создан!");
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
