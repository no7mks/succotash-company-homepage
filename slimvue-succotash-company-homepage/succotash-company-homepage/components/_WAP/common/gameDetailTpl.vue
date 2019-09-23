<template>
    <base-page>
        <div id="main" slot="page-content">
            <div id="screen1">
                <div id="title">{{gameData.title}}</div>
                <div id="game-detail">
                    <div class="game-item">
                        <div class="game-name">简介</div>
                        <div class="game-desc">{{gameData.full_desc}}</div>
                    </div>
                    <div class="game-screen-shot">
                        <div class="game-name">截图</div>
                        <div class="img-list">
                            <img :src="item.img" v-for="item in gameData.screenShotImages" :style="getAvatarStyle(imgStyle)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </base-page>
</template>

<script>
    import basePage from "./BasePage";

    export default {
        name: "game-page-detail-tpl",
        components: {
            basePage,
        },
        props: {
            gameData: {
                type     : Object,
                required : true,
            },
            imgStyle: {
                type: Object,
                required: true,
            }
        },
        methods: {
            getAvatarStyle(imgStyle) {
                return "width: " + imgStyle.width + "rem; height: " + imgStyle.height + "rem;";
            },
        },
    };
</script>

<style lang="scss" scoped>

    #screen1 {
        width: 6.4rem;
        #title {
            height: 0.7rem;
            line-height: 0.7rem;
            background-color: #5C000B;
            text-align: center;
            font-size: 0.3rem;
            margin-bottom: 0.3rem;
        }

        #game-detail {
            padding: 0 0.2rem 0 0.2rem;
        }
        .game-item {
            width: 6rem;
            .game-desc {
                font-size: 0.2rem;
                line-height: 0.3rem;
                margin-bottom: 0.3rem;
            }
        }

        .game-name {
            font-size: 0.3rem;
            color: #DA3D0F;
            margin-top: 0.2rem;
            margin-bottom: 0.2rem;
        }

        .game-screen-shot {
            .img-list {
                display: flex;
                flex-wrap: wrap;
                align-content: center;
                justify-content: space-between;
                img {
                    width: 2.9rem;
                    height: 5rem;
                    margin-bottom: 0.2rem;
                }
            }
        }

    }

</style>
