<template>
  <div class="nav">
      <router-link class="link" :to="'/'" >
        <img src="@/assets/brightness.png" alt="brightness">
      </router-link>
      <router-link class="link" :to="'contrast'" >
          <img src="@/assets/contrast.png" alt="contrast">
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .nav{
        margin-top: 20px;
    }
    .link {
        margin: 20px;
        img {
            height: 30px;
            filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(29deg) brightness(103%) contrast(101%);

        }
    }
</style>