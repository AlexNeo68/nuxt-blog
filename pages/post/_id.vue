<template>
<el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="14" :lg="12">
        <article class="post">
            <header class="post-header">
                <div class="post-title">
                    <h1>Post title</h1>
                    <nuxt-link to="/"><i class="el-icon-back"></i></nuxt-link>
                </div>
                <div class="post-info">
                    <small><i class="el-icon-date"></i>{{new Date().toLocaleString('ru')}}</small>
                    <small><i class="el-icon-view"></i> 15 </small>
                </div>
                <div class="post-body">
                    <img src="https://kartinkin.net/uploads/posts/2021-03/1616124800_51-p-altai-krasivie-foto-54.jpg" alt="post-image" class="post-image">
                </div>
            </header>
            <main class="post-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit impedit fugiat fuga repellat cumque quidem vitae ea eaque est hic repellendus quis, in omnis dignissimos quod accusamus! Nisi, nemo!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit impedit fugiat fuga repellat cumque quidem vitae ea eaque est hic repellendus quis, in omnis dignissimos quod accusamus! Nisi, nemo!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit impedit fugiat fuga repellat cumque quidem vitae ea eaque est hic repellendus quis, in omnis dignissimos quod accusamus! Nisi, nemo!</p>
            </main>
            <footer>

                <AppCommentForm v-if="availableAddComment" @comment-created="createCommentHandler" class="comment-form"/>
                
                <div class="comments" v-if="false">
                    <AppComment v-for="comment in 4" :key="comment" />
                </div>
                <div v-else>
                    <p class="no-comments">Комментариев нет</p>
                </div>
                
            </footer>
        </article>
    </el-col>
</el-row>
</template>
<script>
import AppComment from '@/components/main/Comment.vue'
import AppCommentForm from '@/components/main/CommentForm.vue'
export default {
    components: {AppComment, AppCommentForm},
    data(){
        return {
            availableAddComment: true
        }
    },
    methods: {
        createCommentHandler(){
            this.availableAddComment = false;
        }
    },
    validate({params}){
        return !!params.id;
    }
}
</script>
<style lang="scss" scoped>
.post-header {
    margin-bottom: 1rem;
}
.post-title,
.post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}
.post-image {
    width: 100%;
    height: auto;
}
.post-content p + p {
    margin-top: 1rem;
}
.comment-form {
    margin-top: 2rem;
}
.no-comments {
    text-align: center;
    padding: 1.2rem;
}
</style>