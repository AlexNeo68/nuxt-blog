<template>
    <el-card class="comment">
        <header class="comment-header" slot="header">
            <div class="comment-author">Comment Author</div>
            <small><i class="el-icon-date"></i> {{new Date().toLocaleString('ru')}}</small>
        </header>
        <div class="comment-body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde omnis modi, aspernatur labore quasi eaque ipsa. Nostrum soluta, temporibus accusantium harum expedita laudantium voluptatum laboriosam maxime aliquam eos dolores animi?
        </div>
    </el-card>
</template>
<style lang="scss" scoped>
.comment {
    margin-top: 1.5rem;
}
.comment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.comment-body {
    font-size: .9rem;
    line-height: 1.3;
}
</style>