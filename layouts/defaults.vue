<script setup lang="ts">
import HeadDetail from "~/components/HeadDetail.vue";
import FootDetail from "~/components/FootDetail.vue";
import Contents from "~/components/Contents.vue";
</script>

<template>
    <div class="app-container">
        <HeadDetail />
        <Contents>
            <slot />
        </Contents>
        <FootDetail />
    </div>
</template>

<style scoped lang="scss">
.app-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    //align-items: center;
    overflow-x: hidden;
    background-image: url("/assets/img/background.jpg");
    //background-image: url("/assets/img/background-dark.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>