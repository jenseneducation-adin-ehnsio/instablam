<template>
  <div class="nav">
      <div class="upper-nav">
          <div class="img-wrapper" >
                <p>normal</p>
                <img :src="image" alt="" ref="img">
          </div>
          <div class="img-wrapper">
                <p>normal</p>
                <img :src="image" alt="" ref="img">
          </div>
          <div class="img-wrapper">
                <p>normal</p>
                <img :src="image" alt="" ref="img">
          </div>
          <div class="img-wrapper">
                <p>normal</p>
                <img :src="image" alt="" ref="img">
          </div>
          <div class="img-wrapper">
                <p>normal</p>
                <img :src="image" alt="" ref="img">
          </div>
          <div class="img-wrapper">
                <p>normal</p>
                <img :src="image" alt="" ref="img">
          </div>
       
      </div>

    <div class="bottom-nav">
        <div class="wrapper">
            <p>brightness</p>
            <router-link class="link" :to="'brightness'" >
                <img src="@/assets/brightness.png" alt="brightness">
                <hr v-if="brightness != 0" >
            </router-link>
        </div>
        <div class="wrapper">
            <p>contrast</p>
            <router-link class="link" :to="'contrast'" >
                <img src="@/assets/contrast.png" alt="contrast">
                <hr v-if="contrast != 0" >
            </router-link>
        </div>
        <div class="wrapper">
            <p>hue</p>
            <router-link class="link" :to="'hue'" >
                <img src="@/assets/hue.png" alt="hue">
                <hr v-if="hue != 0" >
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        image() {
            return this.$store.state.image
        },
        brightness() {
            return this.$store.state.brightness
        },
        contrast() {
            return this.$store.state.contrast
        },
        hue() {
            return this.$store.state.hue
        },
        }

}
</script>

<style lang="scss" scoped>
    .nav {
        .upper-nav {
            display: flex;
            overflow: auto;
            white-space: nowrap;
            width: 100vw;
            max-width: 960px;
            .img-wrapper {
                display: inline;
                margin: 0 10px;
                img {
                    height: 70px;
                }
                p{
                    color: white;
                    font-size: 10px;
                }
            }
        }
    }
    .bottom-nav {
        display: flex;
        justify-content: center;
        margin: 10px auto 20px auto;
    }
    .wrapper {
        margin: 0 10px;
        p {
            color: white;
            font-size: 10px;
        }
        img {
            border: 1px solid black;
            padding: 15px;
            height: 65px;
            border-radius: 50%;                
            filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(29deg) brightness(103%) contrast(101%);
        }
        
        hr {
            color: white;
        }
    }
    .wrapper:active {
        transform: scale(.9);
    }


 
    
</style>