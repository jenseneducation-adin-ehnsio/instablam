<template>
    <div class="contrast">
        <input type="range" min="1" max="100"
        v-model="value" @change="slideEmit" >
        <h3>contrast</h3>
    </div>
</template>

<script>


export default {
    data: () => {return{
        value: 50
    }},
    
    methods: {
        slideEmit() {
            this.$store.dispatch('slideContrast', this.value)
            this.$emit('slide-contrast', this.value)
        }
    },

    created() {
        this.value = this.$store.state.contrast
        
    }
}

</script>

<style>

</style>