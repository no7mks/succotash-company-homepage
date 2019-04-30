<template>
    <a :href="getLink()" target="_blank" :style="getAnchorStyle()">
        <img :src="this.imgsrc" :class="this.classname"/>
        <span></span>
    </a>
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
        },
        methods: {
            getLink() {
                if (this.link) {
                    return this.link;
                }
                else {
                    return 'javascript:void(0);';
                }

            },
            getAnchorStyle() {
                if (this.link) {
                    return "display:block;cursor:pointer;";
                }
                else {
                    return "display:block;cursor:default;";
                }
            }
        }
    };
</script>
