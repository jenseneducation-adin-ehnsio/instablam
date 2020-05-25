<template>
    <div class="camera">
        <video :src-object.prop.camel="streamSrc" ref="video" :class="{ mirror: isMirrored }" />
        
        <div class="grid">
            <img src="" alt="">
            <button class="snap" @click="$emit('snap-button')" ></button>
            <img v-if="!portrait" class="turn"  @click="changeCamera" src="@/assets/camera-turn.png" alt="">
        </div>

        <p>Developed by Adin Ehnsiö</p>
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
                    max: 1600
                },
                height: {
                    min: 360,
                    ideal: 720,
                    max: 1600
                },
                facingMode: 'user'
            }
        }
    }},
    computed: {
        portrait() {
            return this.$store.state.portrait
        },
        isMirrored() {
            return this.$store.state.isMirrored
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
            this.$store.dispatch('flipCamera')
            
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
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    video {
        box-shadow: 4px 4px 12px 0px rgba($color: #000000, $alpha: .5);
        width: 100vw !important;
        height: auto !important;
        max-width: 960px !important;
    }
    .grid {
      width: 100vw !important;
      max-width: 960px !important;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 20px 0;
        .snap {
            margin: auto;
            width: 70px;
            height: 70px;
            font-weight: 700;
            border-radius: 50%;
            box-shadow: 4px 4px 12px 0px rgba($color: #000000, $alpha: .5);
            background-color: transparent;
            color: white;
            border: 2px solid green;
        } 
        .snap:hover{
            background-color: rgba($color: #44bd76, $alpha: .5)
        }
        .turn {
        margin: auto;
        height: 40px;
        z-index: 999;
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(29deg) brightness(103%) contrast(101%);
    }
    }
    .mirror {
        transform: rotateY(180deg);
        -webkit-transform:rotateY(180deg); /* Safari and Chrome */
        -moz-transform:rotateY(180deg); /* Firefox */
    }
}

</style>