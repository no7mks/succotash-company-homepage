<template>
    <base-page>
        <div id="main" slot="page-content">
            <div id="screen1">
                <div id="title">FEATURED GAMES</div>
                <div id="game-list">
                    <div class="game-item" v-for="game in this.gameList">
                        <div class="game-img">
                            <a :href="game.link">
                                <img :src="game.img"/>
                            </a>
                        </div>
                        <div class="game-name">{{game.title}}</div>
                        <div class="game-desc">{{game.full_desc}}</div>
                    </div>
                </div>
            </div>
        </div>
    </base-page>
</template>

<script>
    import basePage from "./common/BasePage";
    import dataSet from 'succotash-company-homepage/components/_WAP/js/gameList';

    export default {
        name: "game-list-page",
        components: {
            basePage,
        },
        data : function () {
            return {
                gameList : dataSet.gameList,
            };
        }
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

        #game-list {
            padding: 0 0.2rem 0 0.2rem;
        }
        .game-item {
            width: 6rem;
            .game-img {
                img {
                    width: 6rem;
                }
            }
            .game-name {
                font-size: 0.3rem;
                color: #DA3D0F;
                margin-top: 0.2rem;
                margin-bottom: 0.2rem;
            }

            .game-desc {
                font-size: 0.2rem;
                line-height: 0.3rem;
                margin-bottom: 0.3rem;
            }
        }

    }

</style>
