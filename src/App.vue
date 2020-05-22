<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  async created() {
    let mobMatch = await this.mobileCheck()
    this.$store.dispatch("checkView", mobMatch)
  },
  methods: {
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
  margin: 0;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: rgb(34, 33, 33);
  margin: 0;
}

* {
  box-sizing: bor;
}


</style>
