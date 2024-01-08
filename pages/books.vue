<script setup lang="ts">
import IndexCard from "~/components/IndexCard.vue";

definePageMeta({
    layout: "defaults",
});

let modelValue = ref(1);
let cardList = reactive([
    {
        title: "幸福的滋味",
        description: "不同文化、社会和个人可能会根据他们的价值观、信仰和经历来定义幸福。一些人可能更重视物质财富和社会地位，而其他人可能更注重内心的平静和精神发展。 科学研究通常将幸福与一些外部因素（如健康、经济状况、社会环境）和内在因素（如性格、态度、期望）相关联。幸福感还可能受到遗传、生活经历和个人选择的影响。 值得注意的是，幸福不是一个静态的终点，而是一个动态的过程，需要个人不断地去理解和追求。",
    },
    {
        title: "争气意味着什么？",
        description: "\"争气\"这个词在中文中有几种含义，主要取决于上下文。一般来说，它的基本意思是努力改变不利的情况或对抗压力，特别是在别人对自己有期望时。比如，一个人如果在困难面前不屈不挠，努力克服，就可以说他在“争气”。在日常用语中，争气常常用来激励某人展现自身的能力，特别是在他们之前表现不佳或处于不利位置时。例如，如果一个学生以前成绩不好，但后来努力学习并取得了好成绩，就可以说他“争了气”。",
    },
    {
        title: "什么是爱？",
        description: "爱是一种深刻而复杂的情感，通常指对他人的深厚的关心和强烈的情感依恋。爱可以有多种形式，如亲情、友情和爱情。在亲情中，爱体现为家庭成员间的彼此支持和无条件的关怀。在友情中，爱表现为朋友间的理解、信任和共同经历的分享。而在爱情中，它不仅包括了深刻的情感联系，还可能伴随着浪漫和身体的吸引。",
    },
    {
        title: "对失败的理解",
        description: "失败是一个普遍的经验，通常被定义为未能达到既定的目标、期望或标准。它是学习和成长过程中不可或缺的一部分。失败提供了学习和改进的机会。通过分析失败的原因，个人或组织可以了解到自己的不足，并在以后的尝试中避免重复相同的错误，面对失败并从中恢复，可以增强个人的韧性和适应能力。这种经历往往促进个人成长，帮助他们在未来的挑战中表现得更好",
    },
    {
        title: "对勤劳的理解",
        description: "勤劳是一种积极的品质，指的是勤奋工作和不懈努力的态度。它通常与生产力、责任感和自我提升联系在一起。勤劳的人往往能够通过不断的努力达成目标，并对社会做出贡献。",
    },
    {
        title: "对疲劳的理解",
        description: "疲劳是一种生理和心理状态，通常是由长时间的劳动或精神压力引起的。它是身体和心灵需要休息和恢复的信号。适当的休息和管理疲劳对于保持健康和工作效率是非常重要的。",
    },
    {
        title: "对痛苦的理解",
        description: "痛苦可以是身体上的，也可以是心理上的。身体上的痛苦如疾病或受伤所引起的疼痛，而心理上的痛苦则可能源自于情感失落、失败或其他心理创伤。痛苦是人生不可避免的一部分，它有时候可以促进个人的成长和心理强大。",
    },
    {
        title: "对忧愁的理解",
        description: "忧愁是一种比较轻微的悲伤或不安的感觉，常常与担忧、失望或懊悔有关。它可能是对现实情况的一种反应，或是对未来的担忧。处理忧愁的方式包括与他人交流、自我反思和寻求专业帮助。",
    },
    {
        title: "对悲伤的理解",
        description: "悲伤是一种强烈的情感体验，通常与失去、失败或其他形式的痛苦经历有关。它是一个自然的情感反应，对于个人的情感发展和适应性改变是重要的。悲伤可以通过时间、支持和情感表达得到缓解。",
    },
    {
        title: "什么是爱？",
        description: "爱是一种深刻而复杂的情感，通常指对他人的深厚的关心和强烈的情感依恋。爱可以有多种形式，如亲情、友情和爱情。在亲情中，爱体现为家庭成员间的彼此支持和无条件的关怀。在友情中，爱表现为朋友间的理解、信任和共同经历的分享。而在爱情中，它不仅包括了深刻的情感联系，还可能伴随着浪漫和身体的吸引。",
    },
]);
let slicePage = computed(() => cardList.slice((modelValue.value - 1) * 3, modelValue.value * 3));

function update(value) {
    modelValue.value = value;
}
</script>

<template>
    <div class="main">
        <div class="pagination">
            <UPagination :max="10" :page-count="3" :total="cardList.length"
                         :model-value="modelValue" @update:model-value="update" />
        </div>
        <UCard class="contents">
            <transition-group name="card">
                <IndexCard v-for="item in slicePage" :key="item" :title="item.title" :description="item.description" />
            </transition-group>
        </UCard>
    </div>
</template>

<style scoped lang="scss">
.contents {
}

.pagination {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 30px 30px 0;
}
</style>