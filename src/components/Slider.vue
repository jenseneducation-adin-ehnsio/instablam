<template>
  <div class="filter">
    <input type="range" min="1" max="100" value="50" class="slider" v-model="value">
  </div>
</template>

<script>
export default {
  data() {return{
    value: 50
  }}

}
</script>

<style lang="scss" scoped>

input {
  width: 90vw;
  max-width: 960px !important;

}

</style>