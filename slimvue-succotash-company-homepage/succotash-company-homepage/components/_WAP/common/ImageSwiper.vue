<template>
    <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div v-for="img in this.slideImages" class="swiper-slide top-bg-img">
                <img :src="img.img">
                <a v-if="img.link" :href="img.link">
                    了解更多
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';

    export default {
        name: "wap-image-swiper",
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
            });
        }
    };
</script>

<style scoped lang="scss">

    @import "~succotash-company-homepage/assets/swiper.min.css";
    @import "~succotash-company-homepage/assets/atlas_icons.css";

    .swiper-container {
        width: 6.4rem;
        height: 7.2rem;
    }

    .swiper-button-disabled{
        visibility: hidden;
    }

    .top-bg-img {
        width: 6.4rem;
        height: 7.2rem;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
        img {
            width: 6.4rem;
            height: 6.2rem;
        }
    }

    .top-bg-img a {
        display: block;
        width: 6.4rem;
        height: 1rem;
        line-height: 1rem;
        position: absolute;
        bottom: 0px;
        background: #E74F27;
        font-size: 0.4rem;
        color: #ffffff;
        text-align: center;
    }

</style>
