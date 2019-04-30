<template>
    <div id="main-body">
        <slot name="page-content"></slot>
    </div>
</template>

<script>
    export default {
        name: "base-page"
    };
</script>

<style type="scss">
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
        min-width : 1000px;
        margin    : 0;
        padding   : 0;
        font-family: 'Arial';
        background-color: #000000;
    }

    #main-body {
        min-width: 1200px;
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
