<script setup lang="ts">
definePageMeta({
    layout: "defaults",
});
</script>

<template>
    <UCard class="contents">
        <div class="paper">
            <div class="icon">
                <UIcon name="i-mdi-book-open-variant" style="width: 3rem;height: 3rem" />
            </div>
            <div class="detail">
                <div class="title">幸福的滋味</div>
                <div class="description">
                    不同文化、社会和个人可能会根据他们的价值观、信仰和经历来定义幸福。一些人可能更重视物质财富和社会地位，而其他人可能更注重内心的平静和精神发展。
                    科学研究通常将幸福与一些外部因素（如健康、经济状况、社会环境）和内在因素（如性格、态度、期望）相关联。幸福感还可能受到遗传、生活经历和个人选择的影响。
                    值得注意的是，幸福不是一个静态的终点，而是一个动态的过程，需要个人不断地去理解和追求。
                </div>
            </div>
            <div class="extra">
                <UButton class="btn" variant="ghost" icon="i-mdi-emoticon-happy" color="emerald">写得漂亮</UButton>
                <UButton class="btn" variant="ghost" icon="i-mdi-music-note-eighth-dotted" color="emerald">有启发</UButton>
                <UButton class="btn" variant="ghost" icon="i-mdi-heart-multiple" color="emerald">有感触</UButton>
            </div>
        </div>
    </UCard>
</template>

<style scoped lang="scss">
.contents {
    .paper {
        padding: 50px 100px 0;
        display: flex;
        flex-wrap: wrap;
        .icon{
            width: 6%;
        }
        .detail{
            width: 94%;
            .title{
                font-size: 2rem;
                margin-bottom: 10px;
            }
        }
        .extra{
            margin-top: 30px;
            .btn{
                margin-right: 20px;
            }
        }
    }
}
</style>