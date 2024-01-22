<script setup lang="ts">
import CSS from "assets/img/card/css.png";
import HTML from "assets/img/card/html.jpg";
import LIFE from "assets/img/card/life.jpg";

definePageMeta({
    layout: "defaults",

});

</script>

<template>
    <div class="content">
        <div class="title">山川灵秀</div>
        <div class="prefix">
            <span>意义</span>
            <span>美丽</span>
            <span>逻辑</span>
            <span>生命</span>
        </div>
        <div class="cards">
            <div class="card">
                <img class="image" :src="HTML" alt="意义" />
                <div class="name">HTML</div>
                <div class="description">
                    语义化标签,表单结构,表格结构,列表结构,浏览器渲染原理,SEO,DOM,图片,音频与视频
                </div>
                <div class="progress">
                    <UProgress :value="56" indicator />
                </div>
            </div>
            <div class="card">
                <img class="image" :src="CSS" alt="美丽" />
                <div class="name">CSS</div>
                <div class="description">
                    盒模型,布局,适配性,Less,Sass,UnoCss,过渡,动画,动态样式,postCss
                </div>
                <div class="progress">
                    <UProgress :value="33" indicator />
                </div>
            </div>
            <div class="card">
                <div class="image js">
                    <div><code>if(love.isTrue())</code></div>
                    <div><code>{</code></div>
                    <div style="text-indent: 2rem"><code>let hand = new Myself()</code></div>
                    <div style="text-indent: 2rem"><code>let humans = new Disaster()</code></div>
                    <div style="text-indent: 2rem"><code>hand.hold(humans)</code></div>
                    <div><code>}</code></div>
                </div>
                <div class="name">JavaScript</div>
                <div class="description">
                    原型与原型链,内存回收,JS引擎,闭包与函数调用,
                    Promise,async与await,防抖与闭包,effect,数据类型,
                    判断类型与值的相等性,构造函数,算法,JS运行机制,TypeScript,
                    React,vue,webpack与vite,pinia
                </div>
                <div class="progress">
                    <UProgress :value="72" indicator />
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="image"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        font-size: 64px;
        margin: 10px 0;
    }

    .prefix {
        span {
            margin-right: 10px;
        }
    }

    .cards {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .card {
            width: 450px;
            box-sizing: content-box;
            padding: 50px 50px 20px;

            .image {
                width: 450px;
                height: 450px;
                border-radius: 10px;
            }

            .js {
                width: 450px;
                height: 450px;
                border-radius: 10px;
                background-color: #504e51;
                color: aliceblue;
                padding: 20px;
            }

            .name {
                font-size: 32px;
                margin: 10px 0;
            }

            .description {
                margin-bottom: 10px;
            }
        }
    }

    .footer {
        width: 100%;
        padding-top: 120px;
        .image {
            width: 100%;
            height: 300px;
            background-image: url("assets/img/card/life.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 0 -500px;
            opacity: 0.1;
        }
    }
}
</style>