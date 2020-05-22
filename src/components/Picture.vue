<template>
  <div class="picture">
    <div class="canvas-container">
      <a class="download" id="download"></a>
      <img class="download" @click="downloadImg" src="@/assets/download.png" alt="">
      <canvas ></canvas>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    downloadImg() {
      const canvas = document.querySelector("canvas")
      const img = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      const link = document.getElementById('download');
      link.setAttribute('download','MyImage.png');
      link.setAttribute('href', img);
      link.click();
    },
  }

}
</script>

<style lang="scss" scoped>
.picture {
    margin-top: 5vw;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    .download {
        position: absolute;
        margin-left: 5px;
        margin-top: 5px;
        height: 30px;
        width: 40px;
        z-index: 999;
    }
    .download:hover {
      cursor: pointer;
    }
    canvas {
        box-shadow: 4px 4px 12px 0px rgba($color: #000000, $alpha: .5);
        width: 100vw !important;
        max-width: 960px !important;
        max-height: 540px !important;
    }
}
@media screen and (min-width: 1000px) {
  .picture {
      margin-top: 50px;
  }
}
</style>