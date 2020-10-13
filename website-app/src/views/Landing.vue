<template>
  <div class="background"></div>
  <div class="content">
    <h1>Thomas Maneschijn</h1>
    <div class="hr"></div>
    <span>Front-end Web Developer</span>
  </div>
</template>

<style scoped>
  .background {
    background: url('../assets/background.jpg') rgba(82, 154, 210, .5);
    background-position-x: center;
    background-position-y: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: multiply;
    filter: blur(1.5px);
    -webkit-filter: blur(1.5px);
    height: 100vh;
    z-index: 1;
  }

  .content {
    display: grid;
    place-items: center;
    gap: 1rem;
    position: absolute;
    width: 100%;
    bottom: 25%;
  }

  h1, span {
    color: #ffffff;
  }

  .hr {
    width: 310px;
    height: 0.5rem;
    background-color: white;
    border-radius: 50px;
  }
</style>

<!-- <script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Landing',
  components: {
    HelloWorld
  }
}
</script> -->
