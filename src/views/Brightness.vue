<template>
    <div class="brightness">
        <input type="range" min="1" max="100"
        v-model="value" @change="slideEmit" >
        <h3>brightness</h3>
    </div>
</template>

<script>


export default {
    data: () => {return{
        value: 50
    }},

    methods: {
        slideEmit() {
            this.$store.dispatch('slideBrightness', this.value)
            this.$emit('slide-brightness', this.value)
        }
    },
    created() {
        this.value = this.$store.state.brightness
    }
}

</script>

<style lang="scss">
    
</style>