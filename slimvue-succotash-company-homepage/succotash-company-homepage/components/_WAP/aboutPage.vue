<template>
    <base-page>
        <div id="main" slot="page-content">
            <div id="screen1">
                <img src="~succotash-company-homepage/assets/images/wap/about.png">
            </div>
            <div id="screen2">
                <div id="game-description-block">
                    <p style="padding-top: 0.28rem">
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
