<template>
    <base-page>
        <div id="main" slot="page-content">
            <div id="screen1">
                <img src="~succotash-company-homepage/assets/images/wap/about.png">
            </div>
            <div id="screen2">
                <div id="game-description-block">
                    <p style="padding-top: 0.28rem">
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
    import basePage from "./common/BasePage";

    export default {
        name: "wap-about-page",
        components: {
            basePage,
        },
    };
</script>

<style lang="scss" scoped>

    #screen1 {
        img{
            display: block;
            width: 6.4rem;
            height: 3.36rem;
            margin-top: -0.6rem;
        }
    }

    #screen2 {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    #game-description-block {
        width: 100%;
        padding-bottom: 0px;
    }

    #game-description-block p {
        margin: 0;
        padding: 0.25rem 0.2rem 0rem 0.2rem;
        color: #ffffff;
        font-size: .25rem;
        font-family: "Arial";
    }


</style>
