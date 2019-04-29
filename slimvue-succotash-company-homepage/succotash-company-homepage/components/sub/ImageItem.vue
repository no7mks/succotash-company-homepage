<template>
    <a v-if="this.link" :href="this.link" target="_blank" style="display: block">
        <img :src="this.imgsrc" :class="this.classname"/>
    </a>
    <img v-else :src="this.imgsrc" :class="this.classname"/>
</template>

<script>
    export default {
        name: "imageItem",
        props : {
            classname       : {
                type     : String,
                required : true,
            },
            imgsrc     : {
                type     : String,
                required : true,
            },
            link : {
                type : String,
                required: false
            }
        }
    };
</script>

<style scoped>

</style>
