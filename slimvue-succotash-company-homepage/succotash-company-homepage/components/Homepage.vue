<template>
    <div id="main">
        <div id="screen1">
            <div id="top-bar">
                <img id="logo" src="~succotash-company-homepage/assets/images/logo.png"/>
                <topMenu></topMenu>
            </div>
            <div class="swiper-container">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide top-bg-img top-bg1"></div>
                    <div class="swiper-slide top-bg-img top-bg2"></div>
                </div>

                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev icon-image_btn_prev"></div>
                <div class="swiper-button-next icon-image_btn_next"></div>
            </div>
        </div>
        <div id="screen2">
            <div id="screen-shots-title" class="s2-block">
                <span>FEATURED GAMES</span>
            </div>
            <div id="screen-shots-images">
                <img src="~succotash-company-homepage/assets/images/game_pic1.jpg" class="screen-shot-item" />
                <img src="~succotash-company-homepage/assets/images/game_pic2.jpg" class="screen-shot-item" />
                <img src="~succotash-company-homepage/assets/images/game_pic3.jpg" class="screen-shot-item" />
                <img src="~succotash-company-homepage/assets/images/game_pic4.jpg" class="screen-shot-item" />
                <img src="~succotash-company-homepage/assets/images/game_pic5.jpg" class="screen-shot-item" />
                <img src="~succotash-company-homepage/assets/images/game_pic6.jpg" class="screen-shot-item" />
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
    import Swiper from 'swiper';

    export default {
        name       : 'homepage',
        components : {
            imageItem,
            topMenu,
        },
        data : function () {
            return {
                imageItemClass : 'screen-shot-item',
                screenShotImages : [
                    "~succotash-company-homepage/assets/images/game_pic1.jpg",
                    "~succotash-company-homepage/assets/images/game_pic2.jpg",
                    "~succotash-company-homepage/assets/images/game_pic3.jpg",
                    "~succotash-company-homepage/assets/images/game_pic4.jpg",
                    "~succotash-company-homepage/assets/images/game_pic5.jpg",
                    "~succotash-company-homepage/assets/images/game_pic6.jpg",
                ],
            };
        },
        mounted() {
            const mySwiper = new Swiper('.swiper-container', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    };
</script>

<style lang="scss">

    @import "~succotash-company-homepage/assets/swiper.min.css";
    @import "~succotash-company-homepage/assets/atlas_icons.css";

    $s1-bk-img : url("~succotash-company-homepage/assets/images/top_bg1.jpg");
    $s2-bk-img : url("~succotash-company-homepage/assets/images/content_bg.jpg");

    $top-bg-img1 : url("~succotash-company-homepage/assets/images/top_bg1.jpg");
    $top-bg-img2 : url("~succotash-company-homepage/assets/images/top_bg2.jpg");

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

    .swiper-container {
        width: 100%;
        height: 600px;
    }

    .swiper-button-next, .swiper-button-prev {
        background-size: auto;
    }

    .swiper-button-next {
        right: 57px;
    }

    .swiper-button-prev {
        left: 57px;
    }

    .top-bg-img {
        width: 100%;
        height: 600px;
        background-repeat: no-repeat;
        background-position: center;
    }

    .top-bg1 {
        background-image: $top-bg-img1;
    }
    .top-bg2 {
        background-image: $top-bg-img2;
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
