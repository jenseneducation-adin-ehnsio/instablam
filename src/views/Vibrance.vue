<template>
    <div class="vibrance">
        <p>{{value}}</p>
        <input type="range" min="-50" max="50"
        v-model="value" @change="adjustVibrance" >
        <h3>vibrance</h3>

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
            this.adjustVibrance()
            this.$router.push('/')
        },
        adjustVibrance() {
            this.$store.dispatch('vibrance', this.value)
        }
    },

    created() {
        this.value = this.$store.state.vibrance
        
    }
}

</script>

<style>

</style>