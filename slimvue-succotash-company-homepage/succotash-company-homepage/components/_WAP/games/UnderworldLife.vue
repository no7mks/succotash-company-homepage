<template>
    <game-tpl :game-data="gameData" :img-style="customStyle.imgItem"></game-tpl>
</template>

<script>
    import dataSet from 'succotash-company-homepage/components/_WAP/js/gameList';
    import gameTpl from "../common/gameDetailTpl";

    export default {
        name: "game-page-underworld-life",
        components: {
            gameTpl
        },
        data : function () {
            return {
                gameData : dataSet.gameList[0],
                customStyle: {
                    imgItem: {
                        width: 2.9,
                        height: 5,
                    }
                },
            };
        }
    };
</script>

<style lang="scss" scoped>

</style>
