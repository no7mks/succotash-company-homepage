<template>
    <GamePageTpl
        :screenShotImages="this.screenShotImages"
        :slideImages="this.slideImages"
        :gameDescription="this.gameDescription"
    ></GamePageTpl>
</template>

<script>
    import GamePageTpl from '../sub/GamePageTpl';
    export default {
        name: "underworld-life",
        components : {
            GamePageTpl,
        },
        data : function () {
            return {
                screenShotImages : [
                    {
                        img: require("assets/images/hb_pic1.jpg"),
                    },
                    {
                        img: require("assets/images/hb_pic2.jpg"),
                    },
                    {
                        img: require("assets/images/hb_pic3.jpg"),
                    },
                    {
                        img: require("assets/images/hb_pic4.jpg"),
                    },
                ],
                slideImages : {
                    img2: require("assets/images/top_bg2.jpg"),
                },
                gameDescription: "\"Underworld life\" is a global RPG mobile game masterpiece. In the game, you will become the protagonist, lead the Capos to revenge for the father and reinvigorate the family glory. The real scene restoration of underworld includes capo, beauty, smuggling, kidnapping, casino, and firefight systems. The battle for becoming godfather has been unveiled. The godfather's legendary life awaits your participation."
            };
        }
    };
</script>
