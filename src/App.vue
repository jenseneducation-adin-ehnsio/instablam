<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {

  methods: {
    
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

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
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 3px;
}

button:focus {outline:0;}


</style>
