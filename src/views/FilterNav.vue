<template>
  <div class="nav">

    <div class="upper-nav" :class="{ portrait: portrait, desktop: !portrait }" >
        <PresetFilter @click.native="$store.dispatch('presetChosen', filter)" v-for="filter in filters" :key="filter" :filter="filter"/>
    </div>

    <div class="bottom-nav" :class="{ portrait: portrait, desktop: !portrait }">
        <Effect v-for="fx in effects" :key="fx" :fx="fx" />
    </div>

  </div>
</template>

<script>
import PresetFilter from '@/components/PresetFilter.vue'
import Effect from '@/components/Effect.vue'
import { mapState } from 'vuex'


export default {
    components: {
        PresetFilter, Effect
    },

    computed: mapState(['filters', 'portrait', 'effects'])
    

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
            .img-wrapper:active {
                transform: scale(.9);
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