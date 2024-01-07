<script setup lang="ts">

defineProps({
    title:String,
    description:String
})
</script>

<template>
    <div class="paper">
        <div class="icon">
            <UIcon name="i-mdi-book-open-variant" style="width: 3rem;height: 3rem" />
        </div>
        <div class="detail">
            <div class="title">{{ title }}</div>
            <div class="description">{{description}}</div>
        </div>
        <div class="extra">
            <UButton class="btn" variant="ghost" icon="i-mdi-emoticon-happy" color="emerald">写得漂亮</UButton>
            <UButton class="btn" variant="ghost" icon="i-mdi-music-note-eighth-dotted" color="emerald">有启发</UButton>
            <UButton class="btn" variant="ghost" icon="i-mdi-heart-multiple" color="emerald">有感触</UButton>
        </div>
    </div>
</template>

<style scoped lang="scss">
.paper {
    padding: 50px 100px 0;
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    .icon{
        width: 6%;
    }
    .detail{
        width: 94%;
        .title{
            font-size: 2rem;
            margin-bottom: 30px;
        }
    }
    .extra{
        margin-top: 50px;
        .btn{
            margin-right: 20px;
        }
    }
}
</style>