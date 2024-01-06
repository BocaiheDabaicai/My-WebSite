<script setup lang="ts">
const links = [
    {
        label: "首页",
        icon: "i-mdi-home",
        to: "/",
    },
    {
        label: "文章",
        icon: "i-mdi-book",
        to: "/books",
    }, {
        label: "自传",
        icon: "i-mdi-account-box",
        to: "/self",
    }, {
        label: "关于",
        icon: "i-mdi-duck",
        to: "/about",
    }];
</script>

<template>
    <div class="main">
        <div class="pagination">
            <UVerticalNavigation :links="links">
                <template #default="{link}">
                    <span style="z-index: 1">{{ link.label }}</span>
                </template>
            </UVerticalNavigation>
        </div>
        <div class="content">
            <slot />
        </div>
    </div>
</template>

<style scoped lang="scss">
.main {
    display: flex;
    color: $secondary;
    margin: 20px 0;

    .pagination {
        width: 10vw;
        margin-right: 200px;
    }

    .content {
        background-color: $primary;
        width: 65vw;
        height: 100vh;
        border-radius: 10px;
    }
}
</style>