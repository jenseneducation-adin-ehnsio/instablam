<template>
    <div class="brightness">
        <p>{{value}}</p>
        <input type="range" min="-50" max="50"
        v-model="value" @change="adjustBrightness" >
        <h3>brightness</h3>

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
            this.adjustBrightness()
            this.$router.push('/')
        },
        adjustBrightness() {
            this.$store.dispatch('brightness', this.value)
        }
    },
    created() {
        this.value = this.$store.state.brightness
    }
}

</script>

<style lang="scss">
    .flex-filter {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        p {
            margin: 0 40px;
            font-size: 1.5rem;
            cursor: pointer;
            color: rgb(207, 200, 200);
        }
    }
</style>