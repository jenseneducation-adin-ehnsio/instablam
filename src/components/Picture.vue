<template>
  <div class="picture">
    <!-- Link to download img -->
    <a id="download"></a> 
    <div class="flex">
      <p class="back" @click="deleteImg">camera</p>
      <p class="download" @click="downloadImg" >download</p>
    </div>
    
    <canvas data-caman-hidpi-disabled="true" id="canvas" ></canvas>

    <router-view class="filters"/>
    
  </div>
</template>

<script>


export default {
  
  methods: {
    downloadImg() {
      const canvas = document.querySelector("canvas")
      const img = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      const link = document.getElementById('download');
      console.log(img)
      link.setAttribute('download','MyImage.png');
      link.setAttribute('href', img);
      link.click();
    },
    deleteImg() {
      this.$router.push('/')
      window.location.reload(false); 
    },
    toggleFilter() {
      this.filter = !this.filter
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
    min-height: 90vh;
    .download {
        font-weight: 700;
        margin-left: auto;
        color: rgb(39, 122, 216);
    }
    .download:hover {
      cursor: pointer;
    }
    canvas {
        box-shadow: 4px 4px 12px 0px rgba($color: #000000, $alpha: .5);
        width: 100vw !important;
        max-width: 960px !important;
        max-height: 540px !important;
        margin-bottom: 10px;

    }
    .flex {
      justify-content: center;
      width: 100vw !important;
      max-width: 960px;
      display: flex;
      font-size: .8rem;
      height: 40px;
      align-items: center;
      padding: 10px;
      p {
        margin-top: 0;
        margin-bottom: 0;
      }
    }
    .back {
        margin-right: auto;
        font-weight: 700;
        color: white;
    }
    .back:hover {
      cursor: pointer;
    }
    .filters {
      margin-top: auto;
    }
}

</style>