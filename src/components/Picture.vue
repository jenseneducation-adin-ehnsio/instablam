<template>
  <div class="picture">
    <!-- Link to download img -->
    <a id="download" ref="dl"></a> 

    <!-- Top Navigation -->
    <TopNav @back-btn="deleteImg" @download-btn="downloadImg" />
    
    <!-- Picture -->
    <canvas data-caman-hidpi-disabled="true" id="canvas" ref="canvas" ></canvas>

    <!-- Filter Navigation -->
    <FilterNav v-if="image && !edit" @fx-click="toggleEdit"/>
    <!-- <router-view class="filters" v-if="image" /> -->
    <Brightness v-if="edit && brightness" @back="closeEdit"/>

  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import FilterNav from '@/components/FilterNav.vue'
import Brightness from '@/views/Brightness.vue'
import { mapState } from 'vuex'


export default {
  components: {
    TopNav, FilterNav, Brightness
  },
  computed:  mapState(['image', 'effects']),
  
  data () {return{
    edit: false,
    brightness: false,
    contrast: false,
  }},

  methods: {
    downloadImg() {
      const img = this.$refs.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      this.$refs.dl.setAttribute('download','MyImage.png');
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
    toggleEdit(effect) {
      this.edit = true
      for (let i = 0; i < this.effects.length; i++) {
        if(this.effects[i] == effect) {
          this[effect] = true
        }
      }
    },
    closeEdit() {
      this.edit = false
    }
  },

}
</script>

<style lang="scss" scoped>
.picture {
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