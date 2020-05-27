<template>
    <div class="sepia">
        <p>{{value}}</p>
        <input type="range" min="0" max="100"
        v-model="value" @change="adjustSepia" >
        <h3>sepia</h3>

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
            this.adjustSepia()
            this.$router.push('/')
        },
        adjustSepia() {
            this.$store.dispatch('sepia', this.value)
        }
    },

    created() {
        this.value = this.$store.state.Sepia
        
    }
}

</script>

<style>

</style>