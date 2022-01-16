<template>
    <el-card class="post" body-style="padding:0" shadow="hover">
        <header class="post-header" slot="header">
            <h3>Title of Post</h3>
            <small>
                <i class="el-icon-date"></i>
                {{new Date().toLocaleString('ru')}}</small>
        </header>
        <div class="post-body">
            <img src="https://kartinkin.net/uploads/posts/2021-03/1616124800_51-p-altai-krasivie-foto-54.jpg" alt="post-image" class="post-image">
        </div>

        <div class="post-footer">
            <el-button @click="goToPost" type="primary" round>Открыть</el-button>
            <span>
                <i class="el-icon-chat-dot-square"></i>
                5
            </span>
        </div>

    </el-card>
</template>
<script>
export default {
    methods: {
        goToPost(){
            this.$router.push('/post/1')
        }
    }
}
</script>
<style lang="scss" scoped>
.post {
    margin-bottom: 2rem;
}
.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.post-image {
    width: 100%;
    height: auto;
}
.post-footer {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>