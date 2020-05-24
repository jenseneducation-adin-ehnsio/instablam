<template>
  <div class="picture">
    <div class="canvas-container">
      <a class="download" id="download"></a>
      <img class="download" @click="downloadImg" src="@/assets/download.png" alt="">
      <canvas id="canvas" ></canvas>
      <Slider />
      </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue'

export default {
  components: {
    Slider
  },

  methods: {
    downloadImg() {
      const canvas = document.querySelector("canvas")
      const img = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      const link = document.getElementById('download');
      link.setAttribute('download','MyImage.png');
      link.setAttribute('href', img);
      link.click();
    },
    adjustBrightness() {
      window.Caman("#canvas", function () {
        this.brightness(5).render();
      });
    }
  }

}
</script>

<style lang="scss" scoped>
.picture {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    .download {
        position: absolute;
        margin-left: 10px;
        margin-top: 10px;
        height: 29px;
        width: 35px;
        z-index: 999;
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(29deg) brightness(103%) contrast(101%);


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

</style>