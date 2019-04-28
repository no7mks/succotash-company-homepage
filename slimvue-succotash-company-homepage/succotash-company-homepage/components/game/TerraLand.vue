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
        name: "terra-land",
        components : {
            GamePageTpl,
        },
        data : function () {
            return {
                screenShotImages : {
                    img1: require("assets/images/yx_pic1.jpg"),
                    img2: require("assets/images/yx_pic2.jpg"),
                },
                slideImages : {
                    img2: require("assets/images/top_bg1.jpg"),
                },
                gameDescription: "Terra Land is a magic-themed RPG mobile game. In the Land of Magic full of conflicts, you need to recruit many gifted people with special abilities, collect items and materials, train and cultivate your heroes in order to improve you fighting strength and protect your race.\n" +
                "With numerous legendary heroes, various skills, a great number of items, the game will definitely become collectors’ favorite. \n" +
                "Multiple PVP real-time confrontations, many PVE ways to explore, experience the strong exhilaration of the intense confrontation!\n" +
                "Guild’ donation, friend’ help, you are not fighting alone!\n"
            };
        }
    };
</script>
