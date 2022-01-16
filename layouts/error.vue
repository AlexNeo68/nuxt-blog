<template>
    <div class="error-page">
        <div class="error-content">
            <div class="error-title"><h1>404</h1></div>
            <div class="error-links">
                <nuxt-link to="/">Вернуться на главную</nuxt-link>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.error-page {
    padding-top: 4rem;
    margin-bottom: 3rem;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.error-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
}
.error-title {
    text-align: center;
    color: rgb(141, 12, 12)
}
</style>