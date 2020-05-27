<template>
    <div class="hue">
        <p>{{value}}</p>
        <input type="range" min="0" max="100"
        v-model="value" @change="adjustHue" >
        <h3>hue</h3>

        <div class="flex-filter">
            <p @click="cancel" >reset</p>
            <p @click="$router.push('/')" >apply</p>
        </div>

    </div>
</template>

<script>


export default {
    data: () => {return{
        value: 0
    }},
    
    methods: {
        cancel() {
            this.value = 0
            this.adjustHue()
            this.$router.push('/')
        },
        adjustHue() {
            this.$store.dispatch('hue', this.value)
        }
    },

    created() {
        this.value = this.$store.state.hue
        
    }
}

</script>

<style>

</style>