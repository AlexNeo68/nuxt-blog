<template>
  <el-table :data="posts" style="width: 100%">
    <el-table-column label="Заголовок">
      <template slot-scope="scope">
        <span>{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Комментарии">
      <template slot-scope="scope">
        <i class="el-icon-chat-line-round"></i>
        <span style="margin-left: 10px">{{ scope.row.comments }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Просмотры">
      <template slot-scope="scope">
        <i class="el-icon-view"></i>
        <span style="margin-left: 10px">{{ scope.row.views }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Дата добавления">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>

    <el-table-column label="Действия">
      <template slot-scope="scope">
        <el-tooltip content="Редактировать" placement="top">
          <el-button round size="mini" @click="handleEdit(scope.row.id)">
            <i class="el-icon-edit"></i>
          </el-button>
        </el-tooltip>
        <el-tooltip content="Удалить" placement="top">
          <el-button
            round
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.id)"
          >
            <i class="el-icon-delete"></i>
          </el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  layout: "admin",
  async asyncData({ store }) {
    const posts = await store.dispatch("posts/fetchAdmin");
    return { posts };
  },
  head() {
    return {
      title: `Посты | ${process.env.appName}`,
    };
  },
  methods: {
    handleEdit(post_id) {
      this.$router.push(`/admin/posts/${post_id}`);
    },
    async handleDelete(post_id) {
      try {
        await this.$confirm(
          "Вы действительно хотите удалить этот пост?",
          "Внимание!",
          {
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            type: "warning",
          }
        );
        await this.$store.dispatch("posts/remove", post_id);
        this.posts = this.posts.filter((post) => post.id !== post_id);
        this.$message.success("Пост удалён");
      } catch (e) {}
    },
  },
};
</script>
