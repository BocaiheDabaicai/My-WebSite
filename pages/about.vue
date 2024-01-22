<script setup lang="ts">
definePageMeta({
    layout: "defaults",
});
</script>

<template>
    <div class="content">
        <div class="main">
            <h2>关于这个博客的实现</h2>
            <div>框架：Nuxt3</div>
            <div>UI组件：Nuxt UI</div>
            <div>界面风格：自然风光、清透明亮</div>
        </div>
        <div class="detail">
            <h2>主要设计内容：</h2>
            <div class="section">1.布局组件的实现，主要由
                <UBadge color="white" variant="solid" size="md"><h3>HeadDetail.vue</h3></UBadge>、
                <UBadge color="white" variant="solid" size="md"><h3>Contents.vue</h3></UBadge>、
                <UBadge color="white" variant="solid" size="md"><h3>FootDetail.vue</h3></UBadge>
                构建，最终在
                <UBadge color="white" variant="solid" size="md"><h3>defaults.vue</h3></UBadge>
                组成默认布局
            </div>
            <div class="section">2.默认样式的实现，主要使用
                <UBadge color="white" variant="solid" size="md"><h3>scss</h3></UBadge>
                实现
            </div>
            <div class="section">3.NuxtUI的使用，目前主要使用到
                <UBadge color="white" variant="solid" size="md"><h3>VerticalNavigation</h3></UBadge>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;

    h2 {
        font-size: 2rem;
        border-bottom: 0.25rem solid;
    }

    h3 {
        font-size: 1.2rem;
    }

    .main {
        width: 35%;

        margin-bottom: 50px;
    }

    .detail {
        width: 35%;
        .section{
            margin-bottom: 0.55rem;
        }
    }

}
</style>