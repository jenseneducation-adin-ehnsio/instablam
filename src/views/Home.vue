<template>
  <div class="home">
    
    <Camera v-show="videoMode" @snap-button="takePicture" />
    <Picture v-show="!videoMode" />

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
      let dataUrl = canvas.toDataURL("image/png")
      this.$store.dispatch('saveImage', dataUrl)

      this.videoMode = false
      
    },
  }
}
</script>

<style lang="scss">
    h3{
      font-size: 14px;
      color: rgba($color: #6c8383, $alpha: 1.0);
    }

* { -webkit-tap-highlight-color: transparent; }

input[type="range"] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 90vw; /* Specific width is required for Firefox. */
  max-width: 960px;
  background: transparent; /* Otherwise white in Chrome */
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type="range"]:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

input[type="range"]::-ms-track {
  width: 100%;
  cursor: pointer;

  /* Hides the slider so custom styles can be added */
  background: transparent;
  border-color: transparent;
  color: transparent;
}

//////////// THUMB //////////////////////

/* Special styling for WebKit/Blink */
input[type="range"]::-webkit-slider-thumb {
  position: relative;
  z-index: 1;
  -webkit-appearance: none;
  border: none;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  margin-top: -3px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
}

/* All the same stuff for Firefox */
input[type="range"]::-moz-range-thumb {
  position: relative;
  z-index: 1;
  border: none;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
}

/* All the same stuff for IE */
input[type="range"]::-ms-thumb {
  position: relative;
  z-index: 1;
  border: none;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
}

/////////// TRACK ///////////////////

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 4px;
  background: rgb(187, 187, 187);
  border-radius: 2px;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  // track focus state here:
  // background: #367ebd;
}

input[type="range"]::-moz-range-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  background: rgb(187, 187, 187);
  border-radius: 2px;
}

input[type="range"]::-ms-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0; // @TODO not sure what this is
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: rgb(187, 187, 187);
  border-radius: 4px;
}

input[type="range"]::-ms-fill-upper {
  background: rgb(187, 187, 187);
  border-radius: 4px;
}

  
</style>
