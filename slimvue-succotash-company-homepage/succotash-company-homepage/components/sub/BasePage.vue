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
        font-family: 'PenumbraSansStd-Bold';
    }
</style>
