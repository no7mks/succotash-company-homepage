<template>
    <base-page>
        <div id="main" slot="page-content">
            <div id="screen1">
                <div id="top-bar">
                    <Logo></Logo>
                    <topMenu></topMenu>
                </div>
            </div>
            <div id="screen2">
                <div class="screen-shots-title">
                    <span>CONTACT US</span>
                </div>
                <div id="game-description-block">
                    <p style="padding-top: 0px">
                        We welcome all cooperation opportunities, including game develop, publish,
                        intellectual property licencing, investment and cross brand development etc.
                    </p>
                    <p>
                        Please feel free to contact us <a href="mailto:bd@mars.games" id="click-here">here</a>.
                    </p>
                </div>
                <Footer></Footer>
            </div>
        </div>
    </base-page>
</template>

<script>
    import BasePage from "./sub/BasePage";
    import topMenu from "./sub/topMenu.vue";
    import Logo from './sub/Logo';
    import Footer from './sub/Footer';

    export default {
        name       : 'contact-us-pc-page',
        components : {
            topMenu,
            Logo,
            Footer,
            BasePage
        },
    };
</script>

<style lang="scss">

    $s2-bk-img : url("~succotash-company-homepage/assets/images/content_bg.jpg");
    $s1-bk-img : url("~succotash-company-homepage/assets/images/contact-us-pc.jpg");

    body {
        min-width : 1000px;
        margin    : 0;
        padding   : 0;
    }

    #screen1 {
        width: 100%;
        height: 600px;
        background-color: #000000;
        background-image: $s1-bk-img;
        background-repeat: no-repeat;
        background-position: center;
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

    #game-description-block {
        width: 1200px;
        padding-bottom: 150px;
    }

    #game-description-block p {
        margin: 0;
        padding: 20px 15px 20px 15px;
        color: #402828;
        font-size: 24px;
        font-family: "AdobeHebrew";
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

    #click-here {
        color:#ff0000;
        text-decoration: none;
    }
</style>
