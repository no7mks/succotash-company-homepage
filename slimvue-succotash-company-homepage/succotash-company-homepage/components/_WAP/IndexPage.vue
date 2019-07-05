<template>
    <base-page>
        <div id="main" slot="page-content">
            <div id="screen1">
               <swiper-img :slide-images="slideImages"></swiper-img>
            </div>
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
                screenShotImages : [
                    {
                        img: require("assets/images/game_pic1.jpg"),
                        link: "/game/underworld-life.html",
                        title: "UNDERWORLD LIFE",
                    },
                    {
                        img: require("assets/images/game_pic2.jpg"),
                        link: "/game/terra-land.html",
                        title: "TERRA LAND",
                    },
                    {
                        img: require("assets/images/game_pic3.jpg"),
                        title: "THE CREAZY DEAD",
                    },
                    {
                        img: require("assets/images/game_pic4.jpg"),
                        title: "STEEL FORCE",
                    },
                    {
                        img: require("assets/images/game_pic5.jpg")
                    },
                    {
                        img: require("assets/images/game_pic6.jpg")
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

<style scoped>

</style>
