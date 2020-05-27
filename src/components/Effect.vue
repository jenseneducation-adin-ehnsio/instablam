<template>
        <div class="wrapper">
            <p>{{fx}}</p>
            <div class="link ">
                <img :ref="fx" :src="require(`@/assets/${fx}.png`)" alt="">
                <!-- <hr v-if="value != 0" > -->
            </div>
        </div>
</template>

<script>
export default {
    props: {
        fx: String
    },
    computed: {
        // value() {
        //     return this.$store.getters.fx(this.fx)
        // }
    },

}
</script>

<style>

</style>