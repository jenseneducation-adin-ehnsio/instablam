<template>
  <div class="home">
    
    <Camera v-show="videoMode" @snap-button="takePicture" />
    <Picture v-show="!videoMode" @delete-button="deleteImg" />

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
    },
    isMirrored() {
      return this.$store.state.isMirrored
    }
  },
  data () {return {
    videoMode: true,
  }},
  methods: {
    async takePicture() {
      let ratio = (this.portrait) ? 1 / 1 : 16 / 9
      const canvas = document.querySelector("canvas")
      const ctx = canvas.getContext("2d")
      
      canvas.width = (window.innerWidth < 1280) ? window.innerWidth : 1280;
      canvas.height = window.innerWidth / ratio;
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = "high"

      if(this.isMirrored) {
        ctx.translate(canvas.width, 0);
        ctx.scale(-1,1)
      }
      
      await ctx.drawImage(document.querySelector("video"), 0, 0, canvas.width, canvas.height)
      this.videoMode = false      
    },
    deleteImg() {
      this.videoMode = true
    },
  }
}
</script>

<style lang="scss">
    h3{
      font-size: 14px;
      color: rgba($color: #6c8383, $alpha: 1.0);
    }

    input[type=range] {
    -webkit-appearance: none;
    margin: 18px 0;
    width: 90vw;
    max-width: 960px;
    
    }
    input[type=range]:focus {
    outline: none;
    }
    input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #ffffff;
    }
    input[type=range]::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
    background: #ffffff;
    }
    input[type=range]::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #ffffff;
    border-radius: 1.3px;
    }
    input[type=range]::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    }
    input[type=range]::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
    }
    input[type=range]::-ms-fill-lower {
    background: #ffffff;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }
    input[type=range]::-ms-fill-upper {
    background: #ffffff;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }
    input[type=range]::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    }
    input[type=range]:focus::-ms-fill-lower {
    background: #ffffff;
    }
    input[type=range]:focus::-ms-fill-upper {
    background: #ffffff;
    }
  
</style>
