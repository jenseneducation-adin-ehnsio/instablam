<template>
    <div class="flex">
      <button class="back" @click="$emit('back-btn')">camera</button>
      <p class="download" @click="$emit('download-btn')" >download</p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .flex {
      justify-content: center;
      width: 100vw !important;
      max-width: 960px;
      display: flex;
      font-size: .7rem;
      height: 30px;
      align-items: center;
      padding: 10px;
        p {
        margin-top: 0;
        margin-bottom: 0;
        }
        .download {
            font-weight: 700;
            margin-left: auto;
            color: rgb(39, 122, 216);
        }
        .download:hover {
        cursor: pointer;
        }
        .back {
            background: none;
            border: none;
            margin-right: auto;
            font-weight: 700;
            color: white;
            font-size: .7rem;
        }
        .back:hover {
        cursor: pointer;
        }
    }

</style>