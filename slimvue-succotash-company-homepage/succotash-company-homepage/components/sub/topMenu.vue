<template>
    <ul class="top_menu_bar">
        <li>
            <a href="/" class="main_navi_btn">ABOUT</a>
        </li>
        <li class="li-submenuItem">
            <a class="submenuItem" href="javascript:void(0);">
                <span>FEATURED GAMES</span>
                <i></i>
            </a>
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
                        <a href="javascript:void(0);" class="no-link">THE CREAZY DEAD</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="no-link">STEEL FORCE</a>
                    </li>

                </ul>
            </div>
        </li>
        <li>
            <a href="javascript:void(0);" class="no-link main_navi_btn">NEWS</a>
        </li>
        <li>
            <a href="javascript:void(0);" target="" class="icon-image_icon_tw"></a>
        </li>
        <li>
            <a href="javascript:void(0);" target="" class="icon-image_icon_fb"></a>
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

    .top_menu_bar > li a.main_navi_btn:hover {
        color: #C2aB7D;
    }

    .top_menu_bar > li a.icon-image_icon_fb:hover {
        background-position: -68px -46px;

    }
    .top_menu_bar > li a.icon-image_icon_tw:hover {
        background-position: -68px -15px;
    }

    .top_menu_bar > li a.icon-image_icon_fb, .top_menu_bar > li a.icon-image_icon_tw {
        cursor: default;
    }

    .top_menu_bar > li a.submenuItem {
        color: #C2aB7D;
        position: relative;
    }

    .top_menu_bar > li a.submenuItem i {
        position: absolute;
        border:5px solid transparent;
        border-top-color:#C2aB7D;
        right: -16px;
        top: 4px;
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

    .sub-menu > li a.no-link, .top_menu_bar > li a.no-link{
        cursor: default;
    }

</style>
