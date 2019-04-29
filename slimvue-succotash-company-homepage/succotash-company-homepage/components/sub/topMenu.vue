<template>
    <ul class="top_menu_bar">
        <li>
            <a href="/">ABOUT</a>
        </li>
        <li class="li-submenuItem">
            <a class="submenuItem" href="javascript:void(0);">FEATURED GAMES</a>
            <div class="sub-menu-container">
                <ul class="sub-menu">
                    <li class="grouped-mitem">
                        <a href="/">ALL GAMES</a>
                    </li>
                    <li>
                        <a href="/game/underworld-life.html">UNDERWORLD LIFE</a>
                    </li>
                    <li>
                        <a href="/game/terra-land.html">TERRA LAND</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">THE CREAZY DEAD</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">STEEL FORCE</a>
                    </li>

                </ul>
            </div>
        </li>
        <li>
            <a href="/">NEWS</a>
        </li>
        <li>
            <a href="https://twitter.com/i/flow/consent_flow" target="_blank" class="icon-image_icon_tw"></a>
        </li>
        <li>
            <a href="https://www.facebook.com/" target="_blank" class="icon-image_icon_fb"></a>
        </li>

    </ul>
</template>

<script>
    export default {
        name: "top-menu"
    };
</script>

<style scoped type="scss">

    @import "~succotash-company-homepage/assets/atlas_icons.css";

    .top_menu_bar {
        display: flex;
        margin: 30px 76px 0 0;
        padding: 0;
        background-color:rgba(40,37,31,0.9);
        height: 35px;
        justify-content: space-between;
        align-items: center;
        border-radius:5px
    }

    .top_menu_bar > li {
        display     : inline-block;
        line-height : 18px;
        font-size   : 16px;
        color       : #fff;
        text-align  : center;
        margin-left : 18px;
        margin-right : 18px;
        cursor      : pointer;
    }
    .top_menu_bar > li a {
        color   : #fff;
        display : block;
        text-decoration: none;
    }

    .top_menu_bar > li a.icon-image_icon_fb:hover {
        background-position: -68px -46px;
    }

    .top_menu_bar > li a.icon-image_icon_tw:hover {
        background-position: -68px -15px;
    }

    .top_menu_bar > li a.submenuItem {
        color: #C2aB7D;
    }

    .sub-menu {
        margin: 29px 0 0 0 ;
        padding: 0 0 0 0;
        background-color:rgba(40,37,31,0.9);
        border-radius:5px;
    }

    .sub-menu-container {
        position: absolute;
        top: 0px;
        display: none;
    }

    .top_menu_bar > li.li-submenuItem {
        position: relative;
    }

    .top_menu_bar > li.li-submenuItem:hover .sub-menu-container {
        display: block;
    }

    .sub-menu > li {
        width: 200px;
        height: 40px;
        display: block;
        line-height : 40px;
        font-size   : 16px;
        text-align: left;
        padding-left: 10px;
    }

    .sub-menu > li:hover {
        background-color: #A49D8C;
    }

    .sub-menu > li.grouped-mitem {
        border-bottom: solid 2px #343230;
    }

    .sub-menu > li a {
        color   : #C2aB7D;
        display : block;
        height  : 100%;
        width   : 100%;
        text-decoration: none;
    }

    .sub-menu > li:hover a {
        color: #332c1d;
    }
</style>
