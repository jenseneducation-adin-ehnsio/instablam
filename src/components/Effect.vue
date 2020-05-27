<template>
        <div class="wrapper">
            <p>{{fx}}</p>
            <router-link class="link" :to="fx">
                <img :ref="fx" :src="require(`@/assets/${fx}.png`)" alt="">
                <hr v-if="value != 0" >
            </router-link>
        </div>
</template>

<script>
export default {
    props: {
        fx: String
    },
    computed: {
        value() {
            return this.$store.getters.effectValue(this.fx)
        }
    }

}
</script>

<style>

</style>