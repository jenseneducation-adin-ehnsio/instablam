<template>
  <div class="nav">
      <div class="upper-nav" :class="{ portrait: portrait, desktop: !portrait }" >
            <PresetFilter v-for="filter in filters" :key="filter" :filter="filter"/>
      </div>

    <div class="bottom-nav" :class="{ portrait: portrait, desktop: !portrait }">
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
            <p>exposure</p>
            <router-link class="link" :to="'exposure'" >
                <img src="@/assets/exposure.png" alt="exposure">
                <hr v-if="exposure != 0" >
            </router-link>
        </div>
        <div class="wrapper">
            <p>vibrance</p>
            <router-link class="link" :to="'vibrance'" >
                <img src="@/assets/vibrance.png" alt="vibrance">
                <hr v-if="vibrance != 0" >
            </router-link>
        </div>
        <div class="wrapper">
            <p>sepia</p>
            <router-link class="link" :to="'sepia'" >
                <img src="@/assets/sepia.png" alt="sepia">
                <hr v-if="sepia != 0" >
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
import PresetFilter from '@/components/PresetFilter.vue'

export default {
    components: {
        PresetFilter
    },

    computed: {

        filters() {
            return this.$store.state.filters
        },
        portrait() {
            return this.$store.state.portrait
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
        exposure() {
            return this.$store.state.exposure
        },
        vibrance() {
            return this.$store.state.vibrance
        },
        sepia() {
            return this.$store.state.sepia
        },

        }

}
</script>

<style lang="scss">
    
    .nav {
        .upper-nav {
            display: flex;
            width: 100vw;
            max-width: 960px;
            .img-wrapper {
                display: inline;
                margin: 0 10px;
                img {
                    height: 65px;
                }
                canvas {
                    height: 65px;
                }
                p{
                    margin: 5px;
                    color: white;
                    font-size: 10px;
                }
            }
        }
        .portrait {
        overflow: auto;
        white-space: nowrap;
        }
        .desktop {
            justify-content: center;
            flex-wrap: wrap;
        }
    }
    .bottom-nav {
        display: flex;
        width: 100vw;
        max-width: 960px;
        margin: 10px auto 20px auto;
    }
    .wrapper {
        display: inline;
        margin: 0 6px;
        p {
            color: white;
            font-size: 10px;
        }
        img {
            border: 1px solid black;
            padding: 15px;
            height: 60px;
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