<template>
    <div id="main-body">
        <header-vue></header-vue>
        <slot name="page-content"></slot>
    </div>
</template>

<script>
    import headerVue from "./Header";

    export default {
        name: "wap-base-page",
        components: {
            headerVue
        },
    };
</script>

<style type="scss">

    @import "~succotash-company-homepage/assets/base.css";


    @font-face {
        font-family: 'AdobeHebrew';
        src:
            url("~succotash-company-homepage/assets/font/AdobeHebrew-Bold.svg#AdobeHebrew-Bold") format("svg"),
            url("~succotash-company-homepage/assets/font/AdobeHebrew-Bold.ttf") format("truetype"),
            url("~succotash-company-homepage/assets/font/AdobeHebrew-Bold.woff") format("woff"),
            url("~succotash-company-homepage/assets/font/AdobeHebrew-Bold.woff2") format("woff2");
    }
    @font-face {
        font-family: 'PenumbraSansStd-Bold';
        src:
            url("~succotash-company-homepage/assets/font/PenumbraSansStd-Bold.svg#PenumbraSansStd-Bold") format("svg"),
            url("~succotash-company-homepage/assets/font/PenumbraSansStd-Bold.ttf") format("truetype"),
            url("~succotash-company-homepage/assets/font/PenumbraSansStd-Bold.woff") format("woff"),
            url("~succotash-company-homepage/assets/font/PenumbraSansStd-Bold.woff2") format("woff2");
    }
    body {
        margin    : 0;
        padding   : 0;
        font-family: 'Arial';
        background-color: #FFFFFF;
    }

    html {
        font-size: 120px;
    }

    #main-body {
        height: 100%;
        width: 100%;
    }

    /*bellow for style debug*/

    #test-bg-img {
        display: none;
        position: absolute;
        left:0px;top: 0px;
        width: 100%; height: 1543px;
        background: url('/static/main-bg2.png') top center no-repeat;
    }
    #slimvue-app {
        /*opacity: 0.8;*/
    }

</style>
