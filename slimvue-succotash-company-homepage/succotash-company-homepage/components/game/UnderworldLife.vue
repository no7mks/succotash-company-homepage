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
                slideImages : [
                    {
                        img: require("assets/images/top_bg2.jpg"),
                        link: ""
                    }
                ],
                gameDescription: "“Underworld Life”是一款面向全球发行的RPG大作。作为主角的你负担着重振帮派荣光的使命。游戏内着力重现了地下世界里帮派、美女、走私、绑架、赌场、火拼等各色系统。教父的传奇等待你的书写。"
            };
        }
    };
</script>
