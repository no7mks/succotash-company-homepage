<template>
    <header>
        <div class="clear header_box" ref="header_box">
            <a class="fl logo" href="/index.html">
                <img src="~succotash-company-homepage/assets/images/wap/logo.png" alt="">
            </a>
            <a class="fr side" href="javascript:" @click="sideBar"></a>
        </div>
        <div class="hide_header"></div>
        <div class="side_box" ref="side">
            <div class="hei-auto">
                <div class="clear side_header_box _hover">
                    <a class="fl logo" href="/index.html">
                        <img src="~succotash-company-homepage/assets/images/wap/logo.png" alt="">
                    </a>
                    <a class="fr side_close" href="javascript:" @click="sideBar"></a>
                </div>
                <div class="games" @touchstart="hoverStartFn" @touchend="hoverEndFn" @click="dropDown">GAMES<transition name="drop-down"><i ref="drop"></i></transition></div>
                <transition name="bounce">
                    <ul class="games_side" v-if="show">
                        <li data-url="/game/underworld-life.html" @touchstart="hoverStartFn" @touchend="hoverEndFn" @click="gameHref">UNDERWORLD LIFE</li>
                        <li data-url="/game/terra-land.html" @touchstart="hoverStartFn" @touchend="hoverEndFn" @click="gameHref">TERRA LAND</li>
                        <li data-url="" @touchstart="hoverStartFn" @touchend="hoverEndFn" @click="gameHref">THE CREAZY DEAD</li>
                        <li data-url="" @touchstart="hoverStartFn" @touchend="hoverEndFn" @click="gameHref">STEEL FORCE</li>
                    </ul>
                </transition>
                <div class="contact_us" @touchstart="hoverStartFn" @touchend="hoverEndFn"><a href="/about.html">COMPANY</a></div>
                <div class="contact_us" @touchstart="hoverStartFn" @touchend="hoverEndFn"><a href="/contact-us.html">CONTACT US</a></div>
            </div>

        </div>
    </header>

</template>
<script>
    export default {
        data() {
            return {
                show: false,
                sideBok: false,
                side: '',
                drop: '',
                header_box: ''
            };
        },
        methods: {
            dropDown: function () {
                if (this.show) {
                    this.$refs.drop.style.transform = 'rotate(-90deg)';
                    this.show = false;
                }
                else {
                    this.$refs.drop.style.transform = 'rotate(0)';
                    this.show = true;
                }
            },
            sideBar: function () {
                if (this.sideBok) {
                    this.sideBok = false;
                    this.$refs.side.style.left = '-6.4rem';
                    this.$refs.header_box.style.opacity = '1';
                }
                else {
                    this.sideBok = true;
                    this.$refs.side.style.left = 0;
                    this.$refs.header_box.style.opacity = '0';
                }
            },
            gameHref: function () {
                let _this = event.currentTarget;
                let url = _this.getAttribute('data-url');
                if (url.length > 0) {
                    window.location.href = _this.getAttribute('data-url');
                }
            },
            hoverStartFn:function(e) {
                let self = event.currentTarget,
                    selfClass = self.className;
                self.className = selfClass + ' _hover';
            },
            hoverEndFn: function (e) {
                let self = event.currentTarget,
                    selfClass = self.className;
                self.className = selfClass.replace('_hover', '');
            },
        }
    };
</script>
<style lang="scss" scoped>

    $btn-img-nav : url("~succotash-company-homepage/assets/images/wap/icon_nav.png");
    $btn-img-nav-close : url("~succotash-company-homepage/assets/images/wap/icon_nav.png");
    $btn-img-xiala : url("~succotash-company-homepage/assets/images/wap/icon_xiala.png");

    .header_box, .side_header_box {
        height: 0.98rem;
        width: 6.4rem;
        background: #260e09;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        .logo{
            height: 0.8rem;
            display: block;
            margin: 0.16rem 0 0 0.2rem;
            img {
                width: 1.48rem;
                height: 0.61rem;
            }
        }
        .side {
            background-image: $btn-img-nav;
            background-size: cover;
            width: 0.4rem;
            height: 0.24rem;
            margin: 0.38rem 0.35rem 0 0;
        }
    }

    .hide_header {
        height: 0.98rem;
        width: 6.4rem;
    }

    .side_box {
        overflow-y: scroll;
        position: fixed;
        left: -6.4rem;
        top: 0;
        transition: 0.5s ease;
        z-index: 100;
        height: 100%;
        background: #260e09;
        .hei-auto{
            height: auto;
        }
        .side_header_box {
            position: static;
            .side_close {
                background-image: $btn-img-nav-close;
                background-size: cover;
                width: 0.4rem;
                height: 0.24rem;
                margin: 0.38rem 0.35rem 0 0;
            }
        }
        a {
            display: block;
            color: #ffffff;
        }
        ._hover:hover{
            background: #4D1A12;
            a{
                color: #ffffff;
            }
            color: #ffffff;
        }
        .games, .news, .company, .careers, .contact_us, .games_side li {
            height: 0.8rem;
            width: 6.1rem;
            background: #260e09;
            border-bottom: 0.01rem solid #622d25;
            font-size: 0.28rem;
            color: #ffffff;
            line-height: 0.8rem;
            padding-left: 0.3rem;

            i {
                transition: 0.5s ease;
                background-image: $btn-img-xiala;
                width: 0.18rem;
                height: 0.11rem;
                background-size: cover;
                float: right;
                margin: 0.345rem 0.2rem 0 0;
                transform: rotate(-90deg);
            }
        }

        /*下拉游戏列表动画*/
        .bounce-enter-active {
            animation: bounce-in .5s;
        }
        .bounce-leave-active {
            animation: bounce-in .5s reverse;
        }
        @keyframes bounce-in {
            0% {
                height: 0;
            }
            100% {
                height: 3.2rem;
            }
        }
        .games_side {
            overflow-y: hidden;
            li {
                width: 5.8rem;
                padding-left: 0.6rem;
            }
        }
    }
</style>
