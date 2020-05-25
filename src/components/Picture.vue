<template>
  <div class="picture">
    <!-- Link to download img -->
    <a id="download"></a> 
    
    <canvas data-caman-hidpi-disabled="true" id="canvas" ></canvas>

    <div class="grid">
      <img  src="" alt="">
      <button class="delete" @click="deleteImg"></button>
      <img class="download" @click="downloadImg" src="@/assets/download.png" alt="">
    </div>
    
    <router-view 
      @slide-brightness="adjustBrightness"
      @slide-contrast="adjustContrast"
    />

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
    deleteImg() {
      this.$router.push('/')

      window.location.reload(false); 
    },
    adjustBrightness(val) {
      window.Caman("#canvas", function () {
          this.revert()
          this.brightness(val - 50).render()
      });
    },
    adjustContrast(val) {
      window.Caman("#canvas", function () {
          this.revert()
          this.contrast(val - 50).render()
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
        margin: auto;
        height: 29px;
        width: 35px;
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
    .grid {
      width: 100vw !important;
      max-width: 960px !important;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 20px 0;
      margin: 20px 0;
    }
    .delete {
        margin: auto;
        width: 70px;
        height: 70px;
        font-weight: 700;
        border-radius: 50%;
        box-shadow: 4px 4px 12px 0px rgba($color: #000000, $alpha: .5);
        background-color: transparent;
        color: white;
        border: 2px solid red;
    }
    .delete:hover {
    background-color: rgba($color: #bd4444, $alpha: .5)
    }
}

</style>