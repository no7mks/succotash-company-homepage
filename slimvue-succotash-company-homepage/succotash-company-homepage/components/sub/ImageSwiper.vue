<template>
    <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div v-for="img in this.slideImages" :style="getAvatarStyle(img.img)" class="swiper-slide top-bg-img">
                <a v-if="img.link" :href="img.link"></a>
            </div>
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
                type     : Array,
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
                autoplay: {
                    delay: 5000,
                },
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
        right: 50%;
        margin-right: -703px;
    }

    .swiper-button-prev {
        left: 50%;
        margin-left: -703px;
    }

    .top-bg-img {
        width: 100%;
        height: 600px;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
    }

    .top-bg-img a {
        display: block;
        width: 1100px;
        height: 475px;
        position: absolute;
        bottom: 0px;
        left: 50%;
        margin-left: -550px;
    }

</style>
