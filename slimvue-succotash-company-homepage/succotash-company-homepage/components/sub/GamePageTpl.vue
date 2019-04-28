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
            <div class="screen-shots-title">
                <span>ABOUT</span>
            </div>
            <div id="game-description-block">
                <p>{{gameDescription}}</p>

            </div>
            <div class="screen-shots-title">
                <span>SCREENS</span>
            </div>
            <div id="screen-shots-images">
                <img v-for="img in screenShotImages" :src="img" class="screen-shot-item" />
            </div>
            <div id="footers">
                <span>@2012-2019 XXXXX LIMITED. All rights reserved</span>
            </div>
        </div>
    </div>
</template>

<script>
    import imageItem from "./ImageItem.vue";
    import topMenu from "./topMenu.vue";
    import ImageSwiper from './ImageSwiper';

    export default {
        name       : 'game-page-tpl',
        components : {
            imageItem,
            topMenu,
            ImageSwiper
        },
        data : function () {
            return {
                imageItemClass : 'screen-shot-item',
                screenShotImages : {
                    img1: require("assets/images/hb_pic1.jpg"),
                    img2: require("assets/images/hb_pic2.jpg"),
                    img3: require("assets/images/hb_pic3.jpg"),
                    img4: require("assets/images/hb_pic4.jpg"),
                },
                slideImages : {
                    img2: require("assets/images/top_bg2.jpg"),
                },
                gameDescription: "\"Underworld life\" is a global RPG mobile game masterpiece. In the game, you will become the protagonist, lead the Capos to revenge for the father and reinvigorate the family glory. The real scene restoration of underworld includes capo, beauty, smuggling, kidnapping, casino, and firefight systems. The battle for becoming godfather has been unveiled. The godfather's legendary life awaits your participation."
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
        min-height: 600px;
        background-image: $s2-bk-img;
        background-repeat: repeat;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .screen-shots-title {
        width: 1200px;
        height: 75px;
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

    #game-description-block {
        width: 1200px;
    }

    #game-description-block p {
        margin: 0;
        padding: 20px 15px 20px 15px;
        color: #402828;
        font-size: 24px;
    }

    #footers {
        width: 100%;
        height: 55px;
        margin-top: 50px;
        background-color:rgba(40,37,31,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity:0.6;
        color: #847D6E;
    }

    .screen-shot-item {
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
