<template>
    <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div v-for="img in this.slideImages" :style="getAvatarStyle(img)" class="swiper-slide top-bg-img"></div>
        </div>

        <!-- If we need navigation buttons -->
        <div class="icon-image_btn_prev swiper-button-prev"></div>
        <div class="swiper-button-next icon-image_btn_next"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper';

    export default {
        name: "image-swiper",
        props : {
            slideImages: {
                type     : Object,
                required : true,
            },
        },
        methods: {
            getAvatarStyle(img) {
                return "background-image: url(" + img + ");";
            },
            isLoopEnabled() {
                let len = Object.keys(this.slideImages).length;
                if (len < 2) {
                    return false;
                }
                else {
                    return true;
                }
            }
        },
        mounted() {
            const mySwiper = new Swiper('.swiper-container', {
                // Optional parameters
                direction: 'horizontal',
                loop: this.isLoopEnabled(),
                autoplay: false,
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    };
</script>

<style scoped lang="scss">

    @import "~succotash-company-homepage/assets/swiper.min.css";
    @import "~succotash-company-homepage/assets/atlas_icons.css";


    $top-bg-img1 : url("~succotash-company-homepage/assets/images/top_bg1.jpg");
    $top-bg-img2 : url("~succotash-company-homepage/assets/images/top_bg2.jpg");

    .swiper-container {
        width: 100%;
        height: 600px;
    }

    .swiper-button-disabled{
        visibility: hidden;
    }

    .swiper-button-next, .swiper-button-prev {
        background-size: auto;
    }

    .swiper-button-next {
        right: 57px;
    }

    .swiper-button-prev {
        left: 57px;
    }

    .top-bg-img {
        width: 100%;
        height: 600px;
        background-repeat: no-repeat;
        background-position: center;
    }

    .top-bg1 {
        background-image: $top-bg-img1;
    }
    .top-bg2 {
        background-image: $top-bg-img2;
    }


</style>
