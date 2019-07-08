<template>
    <base-page>
        <div id="main" slot="page-content">
            <div id="screen1">
                <img src="~succotash-company-homepage/assets/images/wap/contact-us-wap2.jpg">
            </div>
            <div id="screen2">
                <div id="game-description-block">
                    <p style="padding-top: 0.28rem">
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
    import basePage from "./common/BasePage";

    export default {
        name: "contact-us-wap-page",
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

    #click-here {
        color:#ff0000;
        text-decoration: none;
    }

</style>
