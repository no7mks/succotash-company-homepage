<template>
    <base-page>
        <div id="main" slot="page-content">
            <div id="screen1">
               <swiper-img :slide-images="slideImages"></swiper-img>
            </div>
            <div id="screen2">
                <div id="title">FEATURED GAMES</div>
                <div id="game-list">
                    <div class="game-item" v-for="game in this.gameList">
                        <div class="game-img">
                            <img :src="game.img"/>
                        </div>
                        <div class="game-name">{{game.title}}</div>
                        <div class="game-desc">{{game.desc}}</div>
                    </div>
                </div>

            </div>
            <di id="screen3">
                <a>More Games >></a>
            </di>
        </div>
    </base-page>
</template>

<script>
    import basePage from "./common/BasePage";
    import swiperImg from "./common/ImageSwiper";

    export default {
        name: "index-page",
        components: {
            basePage,
            swiperImg
        },
        data : function () {
            return {
                gameList : [
                    {
                        img: require("assets/images/wap/news1.png"),
                        link: "/game/underworld-life.html",
                        title: "UNDERWORLD LIFE",
                        desc:'A global RPG mobile game masterpiece. In the game, you will become the protagonist, lead the Capos to revenge for the father and reinvigorate the family glory. The real scene restoration of underworld includes capo, beauty, smuggling, kidnapping, casino, and firefight systems.'
                    },
                    {
                        img: require("assets/images/wap/news2.png"),
                        link: "/game/terra-land.html",
                        title: "TERRA LAND",
                        desc: 'In the Land of Magic full of conflicts, you need to recruit many gifted people with special abilities, collect items and materials, train and cultivate your heroes in order to improve you fighting strength and protect your race.'
                    },
                ],
                slideImages : [
                    {
                        img: require("assets/images/wap/game_bg1.png"),
                        link: "/game/terra-land.html"
                    },
                    {
                        img: require("assets/images/wap/game_bg2.png"),
                        link: "/game/underworld-life.html"
                    }
                ],
            };
        }
    };
</script>

<style lang="scss" scoped>


    #screen3 {
        height: 2rem;
        width: 6.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            font-size: .3rem;
            display: block;
            text-align: center;
            border: solid 0.03rem #E14011;
            height: 0.8rem;
            line-height: 0.8rem;
            width: 2.8rem;
        }
    }

    #screen2 {
        width: 6.4rem;
        #title {
            text-align: center;
            font-size: 0.3rem;
            margin-top: 0.5rem;
            margin-bottom: 0.3rem;
        }

        #game-list {
            width: 6.4rem;
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
