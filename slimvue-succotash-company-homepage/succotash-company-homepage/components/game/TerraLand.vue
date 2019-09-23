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
                screenShotImages : [
                    {
                        img: require("assets/images/yx_pic1.jpg"),
                    },
                    {
                        img: require("assets/images/yx_pic2.jpg"),
                    },
                ],
                slideImages : [
                    {
                        img: require("assets/images/top_bg1.jpg"),
                        link: ""
                    }
                ],
                gameDescription: "“Terra Land”是一款魔法背景的RPG手游。在危机四伏的魔法大陆，你需要和各色各样的伙伴一起，收集物品、训练自身、成长为足以保护家园的勇士。这是一个有着各种可能性的世界，也必将是收藏家的乐园。精心设计的PVP、PVE玩法也一定能满足你勇往直前的梦想！"
            };
        }
    };
</script>
