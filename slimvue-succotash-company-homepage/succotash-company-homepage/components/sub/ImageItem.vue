<template>
    <img :src="this.imgsrc" :class="this.classname"/>
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
            }
        }
    };
</script>

<style scoped>

</style>
