<template>
    <div class="contrast">
        <p>{{value}}</p>
        <input type="range" min="-50" max="50"
        v-model="value" @change="adjustContrast" >
        <h3>contrast</h3>

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
            this.adjustContrast()
            this.$router.push('/')
        },
        adjustContrast() {
            this.$store.dispatch('contrast', this.value)
        }
    },

    created() {
        this.value = this.$store.state.contrast
        
    }
}

</script>

<style>

</style>