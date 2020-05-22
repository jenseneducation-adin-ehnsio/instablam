<template>
    <div class="camera">
        <div class="video-container">
            <img v-if="!portrait" class="turn"  @click="changeCamera" src="@/assets/camera-turn.png" alt="">
            <video :src-object.prop.camel="streamSrc"
            autoplay>
            </video>
        </div>
        
    </div>
</template>

<script>
export default {
    data () {return{
        streamSrc: {},
        videoFormat: {
            video: {
                width: {
                    min: 640,
                    ideal: 1280,
                    max: 1920
                },
                height: {
                    min: 360,
                    ideal: 720,
                    max: 1080
                },
                facingMode: 'user'
            }
        }
    }},
    computed: {
        portrait() {
            return this.$store.state.portrait
        }
    },
    mounted() {
        this.startStream()
    },
    methods: {
        changeCamera() {
            if(this.videoFormat.facingMode == 'user') {
                this.videoFormat.facingMode = { 
                    exact: 'environment'
                }
                this.startStream()
            }
            else {
                this.videoFormat.facingMode == 'user'
                this.startStream()
            }
            
        },
        async startStream() {
            try {
                let stream = await navigator.mediaDevices.getUserMedia(this.videoFormat);
                this.streamSrc = stream;
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style lang="scss" >
.camera {
    margin-top: 5vw;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    .turn {
        position: absolute;
        margin-left: 5px;
        height: 40px;
        z-index: 999;   
    }
    video {
        box-shadow: 4px 4px 12px 0px rgba($color: #000000, $alpha: .5);
        width: 90vw !important;
        height: auto !important;
        max-width: 1280px !important;
    }
}
@media screen and (min-width: 1000px) {
  .camera {
      margin-top: 50px;      
  }
}
</style>