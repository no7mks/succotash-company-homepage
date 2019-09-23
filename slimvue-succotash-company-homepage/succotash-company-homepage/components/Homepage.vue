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
                <div id="screen-shots-title" class="s2-block">
                    <span>产品</span>
                </div>
                <div id="screen-shots-images">
                    <div v-for="img in screenShotImages" class="screen-shots-images-item-container">
                        <imageItem  :imgsrc="img.img" :link="img.link" :key="img.img" :title="img.title" classname="screen-shot-item"></imageItem>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    </base-page>
</template>

<script>
    import BasePage from "./sub/BasePage";
    import imageItem from "./sub/ImageItem.vue";
    import topMenu from "./sub/topMenu.vue";
    import ImageSwiper from './sub/ImageSwiper';
    import Logo from './sub/Logo';
    import Footer from './sub/Footer';

    export default {
        name       : 'homepage',
        components : {
            imageItem,
            topMenu,
            ImageSwiper,
            Logo,
            Footer,
            BasePage
        },
        data : function () {
            return {
                imageItemClass : 'screen-shot-item',
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
                        img: require("assets/images/top_bg1.jpg"),
                        link: "/game/terra-land.html"
                    },
                    {
                        img: require("assets/images/top_bg2.jpg"),
                        link: "/game/underworld-life.html"
                    }
                ],
            };
        }
    };
</script>

<style lang="scss">

    $s2-bk-img : url("~succotash-company-homepage/assets/images/content_bg.jpg");

    #screen1 {
        width: 100%;
        height: 600px;
        background-color: #000000;
    }

    #screen2 {
        width: 100%;
        min-height: 945px;
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
        height: 88px;
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
        min-height: 739px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: space-between;
    }


    .screen-shots-images-item-container {
        width: 388px;
        height: 309px;
        position: relative;
    }

    .screen-shot-item {
        width: 388px;
        height: 289px;
        margin-top: 20px;
    }

    .screen-shots-images-item-container span {
        position: absolute;
        width: 388px;
        height: 289px;
        top: 20px;
        left: 0;
        display: none;
        background-color:rgba(0,0,0,0.5);

    }

    .screen-shots-images-item-container span div {
        color: #FFFFFF;
        font-family: AdobeHebrew;
        font-size: 28px;
        position: absolute;
        bottom: 25px;
        width: 388px;
        text-align: center;
    }

    .screen-shots-images-item-container a:hover img{
        transform: scale(1.02);
    }

    .screen-shots-images-item-container a:hover span {
        transform: scale(1.02);
        display: block;
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

</style>
