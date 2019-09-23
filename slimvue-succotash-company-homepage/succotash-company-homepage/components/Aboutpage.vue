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
                    <span>关于</span>
                </div>
                <div id="game-description-block">
                    <p style="padding-top: 65px">
                        Hydrogen Games是一家由行业老兵和激情玩家共同创办的手游发行商。自2018年创办至今，
                        我们以Mars Games为品牌共发行了四款不同的游戏。我们的目标是将最好的游戏推向全球市场。
                    </p>
                    <p>
                        这仅仅是一个激动人心的开始。数字娱乐市场正以蓬勃的姿态发展着。而我们的团队充满着各种创造性的基因。
                        作为一家全球游戏发行商，我们的背景覆盖了游戏制作、发行、推广等方方面面。我们很自豪能为员工提供一个能实现自我，
                        相互协作，探索各种可能性的平台。
                    </p>
                    <p>
                        我们致力于发行那些能改变市场的产品。同时我们也寻求能和业界领先的游戏开发者建立合作。
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
