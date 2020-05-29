<template>
  <div class="picture">
    <!-- Link to download img -->
    <a id="download" ref="dl"></a> 

    <!-- Top Navigation -->
    <TopNav @back-btn="deleteImg" @download-btn="downloadImg" />
    
    <!-- Picture -->
    <canvas data-caman-hidpi-disabled="true" id="canvas" ref="canvas" ></canvas>

    <!-- Filter dynamic router paths -->
    <router-view class="filters" v-if="image" />
    
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'


export default {

  components: {
    TopNav
  },
  computed: {
    image() {
      return this.$store.state.image
    },
    
  },
  
  methods: {
    downloadImg() {
      const img = this.$refs.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      this.$refs.dl.setAttribute('download', Date.now() + '.png');
      this.$refs.dl.setAttribute('href', img);
      this.$refs.dl.click();
    },
    deleteImg() {
      this.$router.push('/')
      window.location.reload(false); 
    },
    toggleFilter() {
      this.filter = !this.filter
    },

  },

}
</script>

<style lang="scss" scoped>
.picture {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 90vh;

    canvas {
        box-shadow: 4px 4px 12px 0px rgba($color: #000000, $alpha: .5);
        width: 100vw !important;
        max-width: 960px !important;
        max-height: 540px !important;

    }

    .filters {
      margin-top: auto;
    }
}

</style>