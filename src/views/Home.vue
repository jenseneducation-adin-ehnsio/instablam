<template>
  <div class="home">
    
    <Camera v-show="videoMode" />
    <button class="snap" v-show="videoMode" @click="takePicture">snap</button>
    <Picture v-show="!videoMode"/>
    <button class="delete" v-show="!videoMode" @click="deleteImg">delete</button>    

  </div>
</template>

<script>
// @ is an alias to /src
import Camera from '@/components/Camera.vue'
import Picture from '@/components/Picture.vue'

export default {
  name: 'Home',
  components: {
    Camera, Picture
  },
  computed: {
    portrait() {
      return this.$store.state.portrait
    }
  },
  data () {return {
    videoMode: true,
  }},
  methods: {
    async takePicture() {
      let ratio = (this.portrait) ? 1 / 1 : 16 / 9
      const canvas = document.querySelector("canvas")
      canvas.width = (window.innerWidth < 1280) ? window.innerWidth : 1280;
      canvas.height = window.innerWidth / ratio;
      const ctx = canvas.getContext("2d")
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = "high"
      await ctx.drawImage(document.querySelector("video"), 0, 0, canvas.width, canvas.height)
      this.videoMode = false      
    },
    deleteImg() {
      this.videoMode = true
    },
  }
}
</script>

<style lang="scss" scoped>
  .snap, .delete {
        margin: 20px 0;
        width: 70px;
        height: 70px;
        font-weight: 700;
        border-radius: 50%;
        box-shadow: 4px 4px 12px 0px rgba($color: #000000, $alpha: .5);
        background-color: transparent;
        color: white;
  }
  .snap {
    border: 2px solid green;
  }
  .snap:hover{
    background-color: rgba($color: #44bd76, $alpha: .5)
  }
  .delete {
    border: 2px solid red;
  }
  .delete:hover {
    background-color: rgba($color: #bd4444, $alpha: .5)
  }

  button:focus {outline:0;}
</style>
