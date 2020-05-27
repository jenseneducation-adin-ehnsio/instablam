<template>
    <div v-if="image" class="img-wrapper" >
        <p>{{filter}}</p>
        <img data-caman-hidpi-disabled="true" :id="filter" :src="image" alt="" ref="img">
    </div>
</template>

<script>
export default {
    props: {
        filter: String
    },
    computed: {
        image() {
            return this.$store.state.image
        }
    },
    methods: {
        applyFilter() {

            let fil = this.filter
            if(fil != 'normal') {
                    window.Caman(`#${fil}`, function () {
                    this[fil]().render()
                })
            }
        }
        
    },
    created() {
        this.applyFilter()
    }


}
</script>

<style>

</style>