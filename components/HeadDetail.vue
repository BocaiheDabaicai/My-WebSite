<script setup lang="ts">

</script>

<template>
<div class="header">
    <p class="poem">吾不识青天高，黄地厚</p>
    <p class="poem">唯见月寒日暖，来煎人寿。</p>
    <p class="poem">—— 李贺 《苦昼短》</p>
</div>
</template>

<style scoped lang="scss">
.header{
    width: 100vw;
    height: 150px;
    color: $secondary;
    background-color: $primary;
    padding: 10px;
    .poem{
        font-size: 24px;
        margin: 5px;
    }
    .poem:nth-child(1),.poem:nth-child(2){
        text-align: center;
        margin-top: 15px;
        letter-spacing: 2px;
    }
    .poem:nth-child(2){
        padding-left: 200px;
    }
    .poem:nth-child(3){
        text-align: right;
        font-size: medium;
    }
}
</style>