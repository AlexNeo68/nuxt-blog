<template>
  <el-menu :default-active="$route.path" style="height: 100%" router>
    <el-menu-item index="/admin">
      <i class="el-icon-menu"></i>
      <span>Аналитика</span>
    </el-menu-item>
    <el-menu-item index="/admin/posts">
      <i class="el-icon-document-copy"></i>
      <span>Посты</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-coin"></i>
      <span>Создать</span>
    </el-menu-item>
    <el-menu-item index="/admin/users">
      <i class="el-icon-user"></i>
      <span>Пользователи</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-lock"></i>
      <span>Выход</span>
    </el-menu-item>
  </el-menu>
</template>
