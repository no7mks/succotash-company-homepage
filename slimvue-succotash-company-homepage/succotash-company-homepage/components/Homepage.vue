<template>
    <div id="main">
        <div id="screen1">
            <div id="top-bar">
                <img id="logo" src="~succotash-company-homepage/assets/images/logo.png"/>
                <topMenu></topMenu>
            </div>
            <ImageSwiper :slide-images="slideImages"></ImageSwiper>
        </div>
        <div id="screen2">
            <div id="screen-shots-title" class="s2-block">
                <span>FEATURED GAMES</span>
            </div>
            <div id="screen-shots-images">
                <imageItem v-for="img in screenShotImages" :imgsrc="img.img" :link="img.link" :key="img.img" class="screen-shot-item"></imageItem>
            </div>
            <div id="footers">
                <span>@2012-2019 XXXXX LIMITED. All rights reserved</span>
            </div>
        </div>
    </div>
</template>

<script>
    import imageItem from "./sub/ImageItem.vue";
    import topMenu from "./sub/topMenu.vue";
    import ImageSwiper from './sub/ImageSwiper';

    export default {
        name       : 'homepage',
        components : {
            imageItem,
            topMenu,
            ImageSwiper
        },
        data : function () {
            return {
                imageItemClass : 'screen-shot-item',
                screenShotImages : [
                    {
                        img: require("assets/images/game_pic1.jpg"),
                        link: "/game/underworld-life.html"
                    },
                    {
                        img: require("assets/images/game_pic2.jpg"),
                        link: "/game/terra-land.html"
                    },
                    {
                        img: require("assets/images/game_pic3.jpg")
                    },
                    {
                        img: require("assets/images/game_pic4.jpg")
                    },
                    {
                        img: require("assets/images/game_pic5.jpg")
                    },
                    {
                        img: require("assets/images/game_pic6.jpg")
                    },
                ],
                slideImages : {
                    img1: require("assets/images/top_bg1.jpg"),
                    img2: require("assets/images/top_bg2.jpg"),
                },
            };
        }
    };
</script>

<style lang="scss">

    $s2-bk-img : url("~succotash-company-homepage/assets/images/content_bg.jpg");

    body {
        min-width : 1000px;
        margin    : 0;
        padding   : 0;
    }

    #screen1 {
        width: 100%;
        height: 600px;
        background-color: #000000;
    }

    #screen2 {
        width: 100%;
        height: 960px;
        background-image: $s2-bk-img;
        background-repeat: repeat;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .s2-block{
        border: solid 1px rebeccapurple;
    }

    #screen-shots-title {
        width: 1200px;
        height: 90px;
        color: #402828;
        font-size: 30px;
        font-weight: bold;
        border: none;
        border-bottom: solid 2px;
        display: flex;
        align-items:flex-end;
        padding-bottom: 5px;
    }

    #screen-shots-images {
        width: 1200px;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: space-between;
    }

    #footers {
        width: 100%;
        height: 55px;
        background-color:rgba(40,37,31,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity:0.6;
        color: #847D6E;
    }

    .screen-shot-item {
        width: 388px;
        height: 289px;
        margin-top: 20px;
    }
    .screen-shot-item:hover {
        transform: scale(1.02);
        border: solid 1px #FECC7B;
    }

    #top-bar {
        width: 1200px;
        display: flex;
        justify-content: space-between;
        position: absolute;
        z-index: 9999;
        left: 50%;
        margin-left: -600px;
    }

    #logo{
        width: 155px;
        height: 71px;
        margin-top: 20px;
    }

</style>
