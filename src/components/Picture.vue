<template>
  <div class="picture">
      <canvas width="640" height="480"></canvas>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.picture {
    margin-top: 5vw;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    
    canvas {
        box-shadow: 4px 4px 12px 0px rgba($color: #000000, $alpha: .5);
        width: 90vw !important;
        max-width: 1280px !important;
        max-height: 720px !important;
    }
}
@media screen and (min-width: 1000px) {
  .picture {
      margin-top: 50px;
  }
}
</style>