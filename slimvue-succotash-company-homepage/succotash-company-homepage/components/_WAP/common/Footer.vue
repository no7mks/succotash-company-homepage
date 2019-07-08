<template>
    <div id="footers">
        <a class="logo" href="/index.html">
            <img src="~succotash-company-homepage/assets/images/wap/bottom-logo.png" alt="">
        </a>
        <div>©2019 MARS GAMES LIMITED. All rights reserved</div>
        <div style="margin-top: 2px;">All trademarks referenced herein are the properties of their respective owners</div>
    </div>
</template>
<script>
    export default {
        name: "wap-footer-element"
    };
</script>

<style scoped lang="scss">
    #footers {
        width: 6rem;
        height: .9rem;
        background-color:#130200;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #ffffff;
        margin-top: 50px;
        font-family: Arial;
        font-size: 0.15rem;
        line-height: 0.25rem;
        padding: 0.45rem 0.2rem 0.5rem;

        .logo {
            display: block;
            margin: 0.2rem 0rem 0.1rem 0rem;
            img {
                width: 1.61rem;
                height: 0.66rem;
            }
        }

    }
</style>
