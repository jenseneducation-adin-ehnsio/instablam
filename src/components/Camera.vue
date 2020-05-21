<template>
    <div class="camera">
        <video :src-object.prop.camel="streamSrc"
        width="648" height="480" autoplay>
        </video>
    </div>
</template>

<script>
export default {
    data () {return{
        streamSrc: {},
    }},
    async mounted() {

        try {
            let stream = await navigator.mediaDevices.getUserMedia({ video: true });
            this.streamSrc = stream;
        } catch (error) {
            console.log(error);
        }
    },
}
</script>

<style lang="scss" >
.camera {
    margin-top: 5vw;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    
    video {
        box-shadow: 4px 4px 12px 0px rgba($color: #000000, $alpha: .5);
        width: 90vw !important;
        height: auto !important;
        max-width: 720px;
    }
}
@media screen and (min-width: 1000px) {
  .camera {
      margin-top: 50px;
  }
}
</style>