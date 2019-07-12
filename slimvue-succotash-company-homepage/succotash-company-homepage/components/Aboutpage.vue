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
                    <span>ABOUT US</span>
                </div>
                <div id="game-description-block">
                    <p style="padding-top: 65px">
                        Hydrogen Games is a mobile game publisher built by a group of passionate gamers and industry veterans.
                        Since we established in 2018, we've brought four games under the brand Mars Games to the market.
                        Our goal is to bring the best games to the global market.
                    </p>
                    <p>
                        It’s been an exciting beginning for the company and that this is just the beginning for us.
                        The digital entertainment industry is the most dynamic segment now.
                        Creativity and innovation are among the core tenets of our organization and.
                        As a global game publisher, we have a management background that included every facet of game creation,
                        distribution, marketing and corporate structure.
                        We pride ourselves in creating environments where employees are encouraged to be themselves,
                        collaborate, and be inquisitive in order to achieve goals.
                    </p>
                    <p>
                        We can make new games that will change how people think about mobile gaming
                        and will continue to seek out and cooperate with the best game developers worldwide.
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
        name       : 'about-page',
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
    $s1-bk-img : url("~succotash-company-homepage/assets/images/about_top_bg.jpg");

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
        padding-bottom: 150px;
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
