<template>
    <base-page>
        <div id="main" slot="page-content">
            <h3 style="font-size: .24em">
                Mars games
            </h3>
        </div>
    </base-page>
</template>

<script>
    import basePage from "./common/BasePage";

    export default {
        name: "index-page",
        components: {
            basePage,
        },
    };
</script>

<style scoped>

</style>
