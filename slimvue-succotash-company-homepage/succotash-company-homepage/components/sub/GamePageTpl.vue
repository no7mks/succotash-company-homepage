<template>
    <base-page>
        <div id="main" slot="page-content">
            <div id="screen1">
                <div id="top-bar">
                    <Logo></Logo>
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
                    <imageItem v-for="img in screenShotImages" :imgsrc="img.img" :link="img.link" :key="img.img" classname="screen-shot-item"></imageItem>
                </div>
                <Footer></Footer>
            </div>
        </div>
    </base-page>
</template>

<script>
    import BasePage from "./BasePage";
    import imageItem from "./ImageItem.vue";
    import topMenu from "./topMenu.vue";
    import ImageSwiper from './ImageSwiper';
    import Logo from './Logo';
    import Footer from './Footer';

    export default {
        name       : 'game-page-tpl',
        components : {
            imageItem,
            topMenu,
            ImageSwiper,
            Logo,
            Footer,
            BasePage
        },
        props : {
            screenShotImages: {
                type     : Array,
                required : true,
            },
            slideImages: {
                type     : Array,
                required : true,
            },
            gameDescription: {
                type     : String,
                required : true,
            },
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
        font-family: "AdobeHebrew";
    }

    .screen-shot-item {
        margin-top: 20px;
    }
    .screen-shot-item:hover {
        /*transform: scale(1.02);*/
        /*border: solid 1px #FECC7B;*/
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
</style>
