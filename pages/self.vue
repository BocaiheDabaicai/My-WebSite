<script setup lang="ts">
definePageMeta({
    layout: "defaults",
});
</script>

<template>
    <div class="main">
        <div class="detail">
            <div class="picture"></div>
            <div class="description">
                <section>你好呀！陌生人，当你看到这里的时候，就表示我的人生所经历的事情正在一幕幕被揭开，我是谁？我为什么渴望被注意到？希望你能把好奇心保持到看完的时候。</section>
                <section>可能很多的人如我一样，没有机会去感受异域风光的美，从家、学校到社会都是一串望不见阳光的孤岛，身边的大多数同龄人，不断被侵蚀，成为了延续孤岛的养分，丢失最好的自己。</section>
                <section>路上自己总在想，如果生活的一切美好都无法走进现实，自己走出来意义又如何呢？我不是官宦、奇才、平凡与优者，我只想要尽可能去感受别人眼中的美好，清扫沉积心里的灰。二十多年里，多少艰辛与苦难、多少绝望与惆怅、多少不甘与失落冲击着我，可这样的层次却始终用尽办法困住我，使我永远不能向前一步。</section>
                <section>看见美妙光景就在眼前，行走的意识却无法簇动我的脚踝，每一步都意味着超乎常人所想象的痛苦，为什么，为什么别人触手可及的温柔，我却始终无法见仲？于是乎，人类最不想触及的感觉，生长在我的心中，逐渐不再受到别人的暖心待见、逐渐成为我存在的力量、逐渐领会到不受触及之美极。独一无二的存在形式，逐渐使我偏离常人最积极的轨道，我真是天创造的谜团。</section>
                <section>我不缺乏毅勇坚贞的奋斗品格、不缺乏通透灵动的意识触感、不缺乏至善温暖的纯洁心境，天却不让我接触这世上有趣的一切，只有麻木、与世间极恶品性接触却又年幼无知而沾染恶习出现，贫穷已是我最感动的赏赐，没有不断地冲击，已使我坚毅、孤独的内心无法再承受，变成脆弱、孤僻、悲观。这并非我所想要去感受的，即便是有一点点的美丽可以出现。</section>
                <section>存在至今，是我还相信有一条走出去的路出现在我眼前，为此我准备已久，打算打完这场仗，我再来决定自己是否还有机会存在，因为可以以自己的方式去活着，比活着更有价值，人才可以更敞亮，很快就会开始。</section>
                <section>感谢出现在我生命里的每一个人，是你们让我明白生命，对我自己来说，这些远远不足够，我存在的意义，一定是从自身出发，不断历练，最后把更多的“我”带出孤岛，让更多的人向自己向往的模样去活着，而不再是灾难的凝聚体。</section>
                <section>记 2024.1.8 ———— 我，或许只在地球的运转里出现几毫厘的时间罢了</section>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.detail{
    width: 100%;
    height: 100%;
    padding: 100px;
    .picture{
        width: 12rem;
        height: 12rem;
        border-radius: 100%;
        background-image: url("/assets/img/mySelf.png");
        background-size: cover;
        background-position: 220px 200px;
        margin: 20px 30px 20px 20px;
        float: left;
    }
    .description{
        font-size: 1.2rem;
        letter-spacing: 2px;
        section{
            margin: 20px 0;
            text-indent: 2.4rem;
            line-height: 3.2rem;
        }
        section:last-child{
            text-align: right;
        }
        section::first-letter{
            font-size: 1.5rem;
            font-weight: bold;
        }
    }
}
</style>