<template>
    <div class="camera">
        <div class="video-container">
            <img v-if="portrait" class="turn"  @click="changeCamera" src="@/assets/camera-turn.png" alt="">
            <video :src-object.prop.camel="streamSrc"
            ref="video">
            </video>
        </div>
        
    </div>
</template>

<script>
export default {
    data () {return{
        streamSrc: {},
        desktopFormat: {
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
        },
        mobileFormat: {
            video: {
                width: {
                    min: 360,
                    ideal: 720,
                    max: 1080
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
    async mounted() {
        let mobMatch = await this.mobileCheck()
        await this.$store.dispatch("checkView", mobMatch)

        if(this.portrait) {
            this.startStream(this.mobileFormat)
        }
        else {
            this.startStream(this.desktopFormat)
        }

    },
    methods: {
        changeCamera() {

            let track = this.streamSrc.getTracks()[0];
            track.stop();
            
            if(this.mobileFormat.video.facingMode == 'user') {
                this.mobileFormat.video.facingMode = { 
                    exact: 'environment'
                }
                this.startStream(this.mobileFormat)
            }
            else {
                this.mobileFormat.video.facingMode = 'user'
                this.startStream(this.mobileFormat)
            }
            
        },
        async startStream(format) {
            
            try {
                let stream = await navigator.mediaDevices.getUserMedia(format);
                this.streamSrc = stream;
                this.$refs.video.onloadedmetadata = () => {
                   this.$refs.video.play();
                };
            } catch (error) {
                console.log(error);
            }
        },

        mobileCheck() {
      
        const toMatch = [
                /Android/i,
                /webOS/i,
                /iPhone/i,
                /iPad/i,
                /iPod/i,
                /BlackBerry/i,
                /Windows Phone/i
            ];

            return toMatch.some((toMatchItem) => {
                return navigator.userAgent.match(toMatchItem);
            });

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
        width: 100vw !important;
        height: auto !important;
        max-width: 960px !important;
        min-height: 360px;
    }
}
@media screen and (min-width: 1000px) {
  .camera {
      margin-top: 50px;      
  }
}
</style>