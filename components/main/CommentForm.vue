<template>
    <el-form ref="form" :rules="rules" @submit.native.prevent="onSubmit" :model="form">
        <h2>Оставить комментарий</h2>
        <el-form-item label="Ваше имя" prop="name">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Текст комментария" prop="text">
            <el-input type="textarea" v-model="form.text"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" :loading="loading" round native-type="submit">Оставить комментарий</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
  export default {
    data() {
      return {
        loading: false,
        post_id: 1,
        form: {
          name: '',
          text: ''
        },
        rules: {
            name: [
                { required: true, message: 'Укажите ваше имя', trigger: 'blur' },
                { min: 3, max: 15, message: 'Длина имени должна быть от 3 до 15 символов', trigger: 'blur' }
            ],
            text: [
                { required: true, message: 'Необходимо указать комментарий', trigger: 'blur' },
                { min: 3, max: 255, message: 'Длина комментария должна быть от 3 до 255 символов', trigger: 'blur' }
            ],
        }
      }
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
              this.loading = true;
              debugger
              const formData = {
                  name: this.form.name,
                  text: this.form.text,
                  post_id: this.post_id,
              }
              try {
                  this.$message({
                      showClose: true,
                      type: 'success',
                      message: 'Коментарий добавлен'
                  });
                  this.$emit('comment-created', formData);
              } catch (e) {
                  console.log(e);
              } finally {
                  this.loading = false;
              }
          }
        });
      }
    }
  }
</script>