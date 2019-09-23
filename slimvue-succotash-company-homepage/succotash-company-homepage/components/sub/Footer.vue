<template>
    <div id="footers">
        <div>©2019 HYDROGEN GAMES LIMITED. 版权所有</div>
    </div>
</template>
<script>
    export default {
        name: "footer-element"
    };
</script>

<style scoped>
    #footers {
        width: 100%;
        height: 55px;
        background-color:rgba(40,37,31,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        opacity:0.6;
        color: #847D6E;
        margin-top: 50px;
        font-family: Arial;
        font-size: 14px;
    }
</style>
